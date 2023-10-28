using UnityEngine;
using UnityEngine.UI;

public class CharacterImporter : MonoBehaviour
{
    public GameObject characterImage;

    // Start is called before the first frame update
    void Start()
    {
        // "CatPretty" GameObject ������
        GameObject catPrettyObject = GameObject.Find("CatPretty");

        if (catPrettyObject != null)
        {
            // "CatPretty" GameObject �ɃA�^�b�`���ꂽ Image �R���|�[�l���g���擾���悤�Ƃ��܂�
            Image catPrettyImage = catPrettyObject.GetComponent<Image>();

            if (catPrettyImage != null)
            {
                // "characterImage" GameObject ��L���ɂ��܂�
                characterImage.SetActive(true);
            }
            else
            {
                Debug.LogError("'CatPretty' GameObject ��� Image �R���|�[�l���g��������܂���B");
            }
        }
        else
        {
            Debug.LogError("GameObject 'CatPretty' ��������܂���B");
        }
    }
}