using JetBrains.Annotations;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ModifyStatus : MonoBehaviour
{
    public Transform canvas;
    public Transform canvas2;
    public Image FoodImage;
    public Image Syukka;
    float span = 0.3f;
    float delta = 0;
    private int count;
    int GoShipping = 1;
    // Start is called before the first frame update
    void Start()
    {
        count = 0;
    }
    private void Update()
    {

    }

    //�{�^������
    //�摜�o�Ă��適�������񕁒ʂ̉摜�ō��B
    //���l���Z
    //�o�׃{�^���o�������������B
    public void OnClick()
    {
        Image image = Instantiate(FoodImage, Vector3.zero, Quaternion.identity);
        image.transform.SetParent(canvas);
        image.transform.position = new Vector2(360, 400);//���̍��W
        count++;
        CountCheck(count);
    }
    void CountCheck(int count)
    {
        if(count == GoShipping)
        {
            Debug.Log(count);
            Shipping();
        }
        else
        {
            Debug.Log(count);
        }
    }
    void Shipping()
    {
        Image shipping = Instantiate(Syukka, Vector3.zero, Quaternion.identity);
        shipping.transform.SetParent(canvas2);
        shipping.transform.position = new Vector2(360, 640);//���̍��W
    }
  

}
