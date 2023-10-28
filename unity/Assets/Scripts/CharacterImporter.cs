using UnityEngine;
using UnityEngine.UI;

public class CharacterImporter : MonoBehaviour
{
    public Image characterImage;

    // Start is called before the first frame update
    void Start()
    {
        Color color = gameObject.GetComponent<Image>().color;
        color.a = 0f;
        gameObject.GetComponent<Image>().color = color;
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Color color = gameObject.GetComponent<Image>().color;
            color.a = 255.0f;
            gameObject.GetComponent<Image>().color = color;
        }
    }


}
        
        