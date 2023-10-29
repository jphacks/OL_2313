using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SyukkaBuotton : MonoBehaviour
{
    public NamingBox namingBox;
    // Start is called before the first frame update
    void Start()
    {

    }
    // Update is called once per frame
    void Update()
    {
        
    }
    public void OnClick()
    {
        //音楽止める
        GameObject StopTheMusic = GameObject.Find("AudioSource");
        StopTheMusic.SetActive(false);
        GameObject StopTheLife = GameObject.Find("CatPretty");
        StopTheLife.SetActive(false);
        GameObject StopTheFoodImage = GameObject.Find("FoodImage");
        StopTheFoodImage.SetActive(false);
        GameObject StopTheSyukkaButton = GameObject.Find("SyukkaButton");
        StopTheSyukkaButton.SetActive(false);
        //たけしを消す
        namingBox.OpenDialog();
        //たけしは消えた等のダイアログの表示
    }
}
