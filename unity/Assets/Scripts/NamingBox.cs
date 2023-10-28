using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class NamingBox : MonoBehaviour
{
    public TextMeshProUGUI CharactorName; 
    TextMeshProUGUI inputField;
    public void OnClick()
    {
        inputField = this.GetComponentInChildren<TextMeshProUGUI>();
        Debug.Log(inputField.text);
        CharactorName.text=inputField.text;
        CharactorName.color = new Color(233.0f, 203.0f, 177.0f, 255.0f);
    }

}