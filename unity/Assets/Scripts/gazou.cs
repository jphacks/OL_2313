using UnityEngine;
using System.Collections;
using UnityEngine.Networking;
 
public class gazou: MonoBehaviour {
    [SerializeField]void Start() {
        StartCoroutine(GetTexture());
    }
 
    IEnumerator GetTexture() {
        UnityWebRequest www = UnityWebRequestTexture.GetTexture("https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s800/syachiku.png");
        yield return www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success) {
            Debug.Log(www.error);
            Debug.Log("hoge");
        }
        else {
            Texture myTexture = ((DownloadHandlerTexture)www.downloadHandler).texture;
            Debug.Log("fuga");
        }
    }
}