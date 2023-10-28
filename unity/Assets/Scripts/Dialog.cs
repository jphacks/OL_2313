using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Dialog : MonoBehaviour
{
    public GameObject dialog;
    // Start is called before the first frame update
    private void Start()
    {
        ExistDialog();
    }
    public void ExistDialog()
    {
        dialog.SetActive(true);
    }
    public void DeleteDialog()
    {
        dialog.SetActive(false);
    }
}
