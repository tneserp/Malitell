using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;
using TMPro;

public class NoticeControl : MonoBehaviourPun
{
    public TMP_InputField inputField;
    public GameObject noticePrefab;

    // ������ ��Ƽ�� �г��� ���۷���
    private GameObject currentNoticePanel;

    // ��ư Ŭ�� �̺�Ʈ�� ������ �޼���
    public void DisplayInputText()
    {
        // �̹� ��Ƽ�� �г��� �ִ��� üũ
        if (currentNoticePanel != null)
        {
            return; // �̹� ��Ƽ�� �г��� �ִٸ� �������� ����
        }

        photonView.RPC("RPC_DisplayInputText", RpcTarget.AllBuffered, inputField.text);
    }

    [PunRPC]
    private void RPC_DisplayInputText(string text)
    {
        StartCoroutine(DisplayAndFadeOut(text));
    }

    private IEnumerator DisplayAndFadeOut(string text)
    {
        // NoticePrefab�� ����
        currentNoticePanel = PhotonNetwork.Instantiate(noticePrefab.name, transform.position, Quaternion.identity);
        currentNoticePanel.transform.SetParent(transform);
        TMP_Text noticeText = currentNoticePanel.GetComponentInChildren<TMP_Text>();

        // �ؽ�Ʈ �ʱ�ȭ
        noticeText.text = text;

        // ��� �ð�
        yield return new WaitForSeconds(3f);

        // ���̵� �ƿ� ȿ��
        float duration = 0.5f; // ���̵� �ƿ��� �ɸ��� �ð�
        float elapsedTime = 0f;
        Color startColor = noticeText.color;

        while (elapsedTime < duration)
        {
            // ������ �����Ͽ� ���̵� �ƿ� ȿ��
            noticeText.color = Color.Lerp(startColor, new Color(startColor.r, startColor.g, startColor.b, 0), elapsedTime / duration);
            elapsedTime += Time.deltaTime;

            yield return null;
        }

        // NoticePrefab ����
        PhotonNetwork.Destroy(currentNoticePanel);
        currentNoticePanel = null; // ���� �ʱ�ȭ
    }
}
