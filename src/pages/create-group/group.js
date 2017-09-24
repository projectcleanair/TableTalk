// JavaScript source code
var database = firebase.database();
var groupRef = database.ref('groups');

function writeGroupData(groupId, gSize, mLength, gTalkTime) {
    firebase.database().ref('groups/' + groupId).set({
        groupSize: gSize,
        meetingLength: mLength,
        goalTalkTime: gTalkTime
    });
}
/**
Should create a random group id and then call writeGroupData
*/
function createGroup() {
    var length = document.getElementById("size");
    console.log("Pressed");
    writeGroupData(groupRef.push().key, 1, length, length);
}
/**
Should write a new group to the firebase database
*/