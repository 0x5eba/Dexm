import { DateTime } from "luxon";

export default {
  appConfig: {
    locale: "en"
  },
  wallets: [
    {
      id: "FSNBRTEF1234567890",
      name: "Personal",
      activity: [
        {
          description: "Salary",
          amount: 100,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-10-05T08:24:48.034+02:00")
        },
        {
          description: "Mac",
          amount: -15.456,
          recipientDescription: "Steve Jobs",
          recipientId: "BBBBBBBB1234567890",
          timestamp: DateTime.fromISO("2018-10-07T08:24:48.034+02:00")
        },
        {
          description: "Tesla",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:01")
        },
        {
          description: "Example 1",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:02")
        },
        {
          description: "Example 2",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:03")
        },
        {
          description: "Example 3",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:04")
        }
      ]
    },
    {
      id: "WORK",
      name: "Work",
      activity: [
        {
          description: "Salary",
          amount: 100,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-10-05T08:24:48.034+02:00")
        },
        {
          description: "Mac",
          amount: -15.456,
          recipientDescription: "Steve Jobs",
          recipientId: "BBBBBBBB1234567890",
          timestamp: DateTime.fromISO("2018-10-07T08:24:48.034+02:00")
        },
        {
          description: "Tesla",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:00")
        }
      ]
    },
    {
      id: "INVESTMENTS",
      name: "Investments",
      activity: [
        {
          description: "Salary",
          amount: 100,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-10-05T08:24:48.034+02:00")
        },
        {
          description: "Mac",
          amount: -15.456,
          recipientDescription: "Steve Jobs",
          recipientId: "BBBBBBBB1234567890",
          timestamp: DateTime.fromISO("2018-10-07T08:24:48.034+02:00")
        },
        {
          description: "Tesla",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:00")
        }
      ]
    },
    {
      id: "BACKUP",
      name: "Backup",
      activity: [
        {
          description: "Salary",
          amount: 4362.662,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-10-05T08:24:48.034+02:00")
        },
        {
          description: "Mac",
          amount: -15.456,
          recipientDescription: "Steve Jobs",
          recipientId: "BBBBBBBB1234567890",
          timestamp: DateTime.fromISO("2018-10-07T08:24:48.034+02:00")
        },
        {
          description: "Tesla",
          amount: -32.723,
          recipientDescription: "Antonio Groza",
          recipientId: "AAAAAAAA1234567890",
          timestamp: DateTime.fromISO("2018-12-01T08:24:48.034+02:00")
        }
      ]
    }
  ]
};
