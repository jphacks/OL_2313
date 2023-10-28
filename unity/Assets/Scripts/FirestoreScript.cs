using System;
using System.Collections;
using System.Collections.Generic;
using Firebase.Extensions;
using Firebase.Firestore;
using UnityEngine;

public class FirestoreScript : MonoBehaviour
{
    public void Start()
    {
        var db = FirebaseFirestore.DefaultInstance;
        DocumentReference docRef = db.Collection("your-collection").Document("9dCElJJKwkI8uUZf8nJ9");
        docRef.GetSnapshotAsync().ContinueWithOnMainThread(task =>
        {
            DocumentSnapshot snapshot = task.Result;
            if (snapshot.Exists)
            {
                Debug.Log(String.Format("Document data for {0} document:", snapshot.Id));
                Dictionary<string, object> city = snapshot.ToDictionary();
                foreach (KeyValuePair<string, object> pair in city)
                {
                    Debug.Log(String.Format("{0}: {1}", pair.Key, pair.Value));
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