using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class NamingBox : MonoBehaviour
{
    public Image Dialog;
    public void Start()
    {
        Dialog.transform.DOScale(new Vector2(0.0f, 0.0f), 0.01f);
    }
    public void OpenDialog()
    {
        Dialog.transform.DOScale(new Vector2(1.0f, 1.0f), 0.75f);
    }
    public void OnClick() {
        Dialog.transform.DOScale(new Vector2(0.0f, 0.0f), 0f);
    }

}