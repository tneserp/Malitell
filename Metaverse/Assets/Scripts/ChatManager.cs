using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Photon.Realtime;
using Photon.Pun;
using UnityEngine.SceneManagement;

public class ChatManager : MonoBehaviourPunCallbacks
{
    public List<string> chatList = new List<string>();
    public Button sentBtn;
    public TMP_Text chatLog;
    public TMP_Text chattingList;
    public TMP_InputField input;
    public ScrollRect scroll_rect;
    public TMP_Text myNick;
    private string chatters;
    private RectTransform contentRect;

    private bool scrollToBottom = true;
    private float scrollPosition = 0f;

    // ���콺 �� ���� ����
    private float scrollSensitivity = 0.1f;

    public GameObject mainScene;
    public GameObject loginScene;

    private void Awake()
    {
        contentRect = chatLog.rectTransform.parent.GetComponent<RectTransform>();
        if (photonView.IsMine)
        {
            myNick.text = PhotonNetwork.NickName;
            myNick.color = Color.white;
        }
        else
        {
            myNick.text = photonView.Owner.NickName;
            myNick.color = Color.red;
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.IsMessageQueueRunning = true;
        scroll_rect = FindObjectOfType<ScrollRect>();
        contentRect = chatLog.rectTransform.parent.GetComponent<RectTransform>();
    }

    public void SendButtonOnClicked()
    {
        if (input.text.Equals(""))
        {
            Debug.Log("Empty");
            return;
        }
        string msg = string.Format("[{0}] {1}", PhotonNetwork.LocalPlayer.NickName, input.text);
        photonView.RPC("ReceiveMsg", RpcTarget.OthersBuffered, msg, PhotonNetwork.LocalPlayer.NickName);
        ReceiveMsg(msg, PhotonNetwork.LocalPlayer.NickName);
        input.ActivateInputField();
        input.text = "";
    }

    private void Update()
    {
        // ���콺 �ٷ� ��ũ�� ����
        float scrollDelta = Input.GetAxis("Mouse ScrollWheel");
        if (scrollDelta != 0f)
        {
            StopCoroutine("ScrollToBottom");
            scrollToBottom = false;

            // ��ũ�� ��ġ�� ���콺 �ٷ� ����
            scroll_rect.verticalNormalizedPosition += scrollDelta * scrollSensitivity;
        }
        else
        {
            scrollToBottom = true;
        }

        // ����ڰ� ��ũ���� �������� �� ��ũ�� ������ ���߰�, ����ڰ� ��ũ���� ���߸� �ٽ� ��ũ���� �� �Ʒ��� �̵��մϴ�.
        if (Input.GetMouseButtonDown(0))
        {
            StopCoroutine("ScrollToBottom");
            scrollToBottom = false;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            StartCoroutine("ScrollToBottom");
        }
    }


    public void OnLobbyButtonClicked()
    {
        // mainScene�� Ȱ��ȭ�� ������ ��
        if (mainScene)
        {
            // �� ������
            PhotonNetwork.LeaveRoom();
            // mainScene�� ��Ȱ��ȭ�ϰ� loginScene�� Ȱ��ȭ
            mainScene.SetActive(false);
            loginScene.SetActive(true);
        }
    }

    void ChatterUpdate()
    {
        chatters = "������\n";
        foreach (Player p in PhotonNetwork.PlayerList)
        {
            chatters += p.NickName + "\n";
        }
        chattingList.text = chatters;
    }

    [PunRPC]
    public void ReceiveMsg(string msg, string senderNickname)
    {
        Color senderColor = senderNickname.Equals(PhotonNetwork.LocalPlayer.NickName) ? Color.white : Color.red;
        chatLog.text += $"\n<color=#{ColorUtility.ToHtmlStringRGB(senderColor)}>{msg}</color>";
        StartCoroutine("ScrollToPosition");
    }

    IEnumerator ScrollToBottom()
    {
        yield return null;
        float normalizedPosition = 0f; // ��ũ���� �� �Ʒ��� ����
        scroll_rect.verticalNormalizedPosition = normalizedPosition;
    }

    IEnumerator ScrollToPosition()
    {
        yield return null;
        // ����� ��ũ�� ��ġ�� �̵��մϴ�.
        scroll_rect.verticalNormalizedPosition = scrollPosition;
    }
}
