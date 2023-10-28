using System;
using System.Collections;
using System.Collections.Generic;
using Firebase.Extensions;
using Firebase.Firestore;
using JetBrains.Annotations;
using UnityEngine;

public class A: MonoBehaviour
{
    public string AAA;
    public void Start()
    {
        
        var db = FirebaseFirestore.DefaultInstance;
        DocumentReference docRef = db.Collection("your-collection").Document("dltVP7tmo5RFJYDw8iOB");
        docRef.GetSnapshotAsync().ContinueWithOnMainThread(task =>
        {
            DocumentSnapshot snapshot = task.Result;
            if (snapshot.Exists)
            {
                Debug.Log(String.Format("Document data for {0} document:", snapshot.Id));
                Dictionary<string, object> city = snapshot.ToDictionary();
                foreach (KeyValuePair<string, object> pair in city)
                {
                    AAA=String.Format("{1}",pair.Key, pair.Value);
                Debug.Log(AAA);
                }
            }
            else
            {
                Debug.Log(String.Format("Document {0} does not exist!", snapshot.Id));
            }
        });

        //à»â∫ÅAèëÇ´çûÇ›
        //var db = FirebaseFirestore.DefaultInstance;
        //DocumentReference docRef = db.Collection("cities").Document("LA");
        //Dictionary<string, object> city = new Dictionary<string, object>
        //{
        //        { "Name", "Los Angeles" },
        //        { "State", "CA" },
        //        { "Country", "USA" }
        //};
        //docRef.SetAsync(city).ContinueWithOnMainThread(task => {
        //    Debug.Log("Added data to the LA document in the cities collection.");
        //});
    }
}