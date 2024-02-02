using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;

public class WebcamController : MonoBehaviourPunCallbacks
{
    public GameObject webcamPrefab; // Webcam �������� �Ҵ��� ����
    public GameObject webContent; // WebContent ������Ʈ�� �Ҵ��� ����

    private GameObject currentWebcam; // ���� ������ ��ķ�� ������ ����

    private void Start()
    {
        // WebContent ������Ʈ�� ã�� �Ҵ�
        webContent = GameObject.Find("WebContent");

        // ã�� ������ ��� ��� ǥ��
        if (webContent == null)
        {
            Debug.LogWarning("WebContent�� ã�� �� �����ϴ�. �������� �������� ���� �� �ֽ��ϴ�.");
        }
    }

    public void OnButtonClick()
    {
        // ��ư Ŭ���� ���� ��ķ�� �ִٸ� ����
        if (currentWebcam != null)
        {
            Destroy(currentWebcam);
            currentWebcam = null;
        }
        else
        {
            // ��ķ�� ���� ��� ���� ����
            CreateWebcam();
        }
    }

    private void CreateWebcam()
    {
        // Photon Network�� ���� ���� �÷��̾�Ը� �����ϵ��� ��
        if (photonView.IsMine)
        {
            // Webcam �������� ����
            currentWebcam = Instantiate(webcamPrefab, webContent.transform);

            // Webcam �����տ� �ִ� RawImage�� �̸� ����
            RawImage rawImage = currentWebcam.GetComponentInChildren<RawImage>();
            rawImage.name = "Webcam";
        }
    }
}
