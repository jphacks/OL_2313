using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class NamingBox : MonoBehaviour
{
   public InputField inputField;
    public Text text;
    // Start is called before the first frame update
    void Start()
    {
        inputField = GameObject.Find("NamingBox").GetComponent<InputField>();
        //text = text.GetComponent<Text>();
    }

    // Update is called once per frame
   public void GetInputName()
    {
        string charactorname = inputField.text;
        Debug.Log(charactorname);

        //ここにダイアログを消すメソッドを持ってくる
    }
}
