using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Photon.Pun;
using Photon.Realtime;

// MonoBehaviour �� �ƴ� Pun ���� �Լ��� ����ϱ� ���� MonoBehaviourPunCallbacks
public class LobbyManager : MonoBehaviourPunCallbacks
{
    public Button loginBtn;
    // TMP_Text �� ���� ����
    public TMP_Text IDtext;
    public TMP_Text ConnectionStatus;

    // Start is called before the first frame update
    private void Start()
    {
        PhotonNetwork.ConnectUsingSettings();
        // ��ư Ȱ��ȭ ���� �⺻ false�� ��Ȱ��ȭ ����
        loginBtn.interactable = false;
        ConnectionStatus.text = "������ ���� �� �Դϴ�...";
    }

    public void Connect()
    {
        // Equals ==
        if (IDtext.text.Equals(""))
        {
            return;
        }
        else
        {
            PhotonNetwork.LocalPlayer.NickName = IDtext.text;
            loginBtn.interactable = false;

            // ���ῡ �������� ��
            if (PhotonNetwork.IsConnected)
            {
                ConnectionStatus.text = "�濡 ���� �� �Դϴ�...";
                // �濡 �������� ����
                PhotonNetwork.JoinRandomOrCreateRoom();
            }
            // ���ῡ �������� ��
            else
            {
                ConnectionStatus.text = "�������� : ���ῡ ���� �߽��ϴ�. \n �翬�� ��...";
                PhotonNetwork.ConnectUsingSettings();
            }
        }
    }

    // ������ ����� �� �ֱ� ���� ���� ������ ������ �� ȣ�� 
    public override void OnConnectedToMaster()
    {
        loginBtn.interactable = true;
        ConnectionStatus.text = "������ ����Ǿ����ϴ�!";
    }
    public override void OnDisconnected(DisconnectCause cause)
    {
        loginBtn.interactable = false;
        ConnectionStatus.text = "�������� : ���ῡ ���� �߽��ϴ�. \n �翬�� ��...";
    }
    public override void OnJoinRandomFailed(short returnCode, string message)
    {
        ConnectionStatus.text = "�� ���� �����ϴ�. ���� ���� �� �Դϴ�...";
    }
    public override void OnJoinedRoom()
    {
        ConnectionStatus.text = "�濡 ����Ǿ����ϴ�.";
        PhotonNetwork.LoadLevel("Main");
    }
}
