using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ToReact : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Onclick()
    {
        var url = new System.Uri("https://www.google.com/webhp?hl=ja&sa=X&ved=0ahUKEwjatOn52vbxAhVQ62EKHdsIBhoQPAgI");
        Application.OpenURL(url.AbsoluteUri);//ƒAƒvƒŠ“à‚ÅŠJ‚¯‚é‚æ‚¤‚É‚µ‚½‚¢‚Ë‚¥
    }
}
