using UnityEngine;
using UnityEngine.UI;

public class CharacterImporter : MonoBehaviour
{
    public GameObject characterImage;

    // Start is called before the first frame update
    void Start()
    {
        // "CatPretty" GameObject を検索
        GameObject catPrettyObject = GameObject.Find("CatPretty");

        if (catPrettyObject != null)
        {
            // "CatPretty" GameObject にアタッチされた Image コンポーネントを取得しようとします
            Image catPrettyImage = catPrettyObject.GetComponent<Image>();

            if (catPrettyImage != null)
            {
                // "characterImage" GameObject を有効にします
                characterImage.SetActive(true);
            }
            else
            {
                Debug.LogError("'CatPretty' GameObject 上に Image コンポーネントが見つかりません。");
            }
        }
        else
        {
            Debug.LogError("GameObject 'CatPretty' が見つかりません。");
        }
    }
}