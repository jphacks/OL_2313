using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Moving : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        transform.DOScale(new Vector2(0.0f,0.0f),1.5f);
        transform.DOMoveY(780.0f, 1.5f);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
