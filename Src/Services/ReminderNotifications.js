import PushNotification from 'react-native-push-notification';

class ReminderNotification {
  constructor() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
    });
    PushNotification.createChannel(
      {
        channelId: 'my-channel',
        channelName: 'My channel',
      },
      //  created => console.log(`CreateChannel returned '${created}'`),
    );
  }
  setReminder = (date, title, content, noteId) => {
    //console.log(date, '1111122333');
    PushNotification.localNotificationSchedule({
      id: noteId,
      channelId: 'my-channel',
      title: title,
      message: content,
      date: date,
    });
    // console.log(id, '1111111');
  };
  cancelNotification = noteId => {
    console.log('cancelNotification ');
    PushNotification.cancelLocalNotification(noteId);
  };
}
export default new ReminderNotification();
