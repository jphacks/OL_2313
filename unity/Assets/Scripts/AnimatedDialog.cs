using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using static UnityEditor.Experimental.GraphView.GraphView;

public class AnimatedDialog : MonoBehaviour
{
    [SerializeField] private Animator animator;
    [SerializeField] private int layer;
    private static readonly int ParamIsOpen = Animator.StringToHash("IsOpen");
    public bool IsOpen => gameObject.activeSelf;
    public bool IsTransition { get; private set; }
    public void Open()
    {
        if (IsOpen || IsTransition) { return; }
        gameObject.SetActive(true);
        animator.SetBool(ParamIsOpen, true);
        StartCoroutine(WaitAnimation("Shown"));//コルーチン？？とかいうやつ
    }
    public void Close()
    {
        if (!IsOpen || IsTransition) { return; }
        animator.SetBool(ParamIsOpen, false);
        StartCoroutine(WaitAnimation("Hidden", () => gameObject.SetActive(false)));
    }
    private IEnumerator WaitAnimation(string stateName, UnityAction onCompleted = null)
    {
        IsTransition = true;
        yield return new WaitUntil(() =>
        {
            var state = animator.GetCurrentAnimatorStateInfo(layer);
            return state.IsName(stateName) && state.normalizedTime >= 1;
        });
        IsTransition = false;

        onCompleted?.Invoke();

    }
        void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
