using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Photon.Realtime;
using Photon.Pun;
public class WebcamDisplay : MonoBehaviourPunCallbacks
{
    private WebCamTexture webcamTexture;
    public RawImage webcamDisplay;
    public TMP_Text myNick;

    private void Awake()
    {
        if (photonView.IsMine)
        {
            myNick.text = PhotonNetwork.NickName;
            myNick.color = new Color(Random.value, Random.value, Random.value);
        }
        else
        {
            myNick.text = photonView.Owner.NickName;
            myNick.color = new Color(Random.value, Random.value, Random.value);
        }
    }
    void Start()
    {
        if (photonView.IsMine)
        {
            // ��� ��ķ ��ġ ���
            WebCamDevice[] devices = WebCamTexture.devices;

            if (devices.Length == 0)
            {
                Debug.Log("No webcam detected");
                return;
            }

            // ù ��° ��ķ�� ����Ͽ� WebCamTexture ����
            webcamTexture = new WebCamTexture(devices[0].name);

            // RawImage ������Ʈ�� ��ķ ���� �Ҵ�
            webcamDisplay.texture = webcamTexture;

            // �׽� ��ķ ����
            webcamTexture.Play();
        }

    }

    // ��ķ�� �����ϴ� �޼ҵ�
    public void StopWebcam()
    {
        if (webcamTexture != null && webcamTexture.isPlaying)
        {
            webcamTexture.Stop();
        }
    }

    // ��ķ�� �ٽ� �����ϴ� �޼ҵ�
    public void StartWebcam()
    {
        if (webcamTexture != null && !webcamTexture.isPlaying)
        {
            webcamTexture.Play();
        }
    }
}
