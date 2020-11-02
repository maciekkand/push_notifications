var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng',
  privateKey: 'PbR4vVQEWx3PskWh8RvMatOKpkXQplNgH3lcuundIck'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// let sub = {
//   endpoint:
//     'https://fcm.googleapis.com/fcm/send/fwMG_ImcKYc:APA91bHtTnPUQ0tBehI7Kk1CGn4s3yhIKhJunhqiggl5XxbyVPmqxDkugwctQMzL2VDTrG_ypKwWqb1Djv-kqWbxpmsatPSjSAUldFENqCIZShaFvZFiCwH-X2hS0-Xjqv5mq2XYHcf9',
//   expirationTime: null,
//   keys: {
//     p256dh:
//       'BLHrTAa9dZ4LV5DoCgtXCXLMd21_S3qyt4eSqn6UQCjIEAuemY0QI29Mvc-LL02e0DLGPKd3xkVHjCD4eqJWHSg',
//     auth: 'TW-LBZmYtXNW7VQUPX4I0w'
//   }
// };

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/e3TEckp-wqs:APA91bHQiPSkvmyTArKf3yEOLmISxDVp3tWo4deAh60HWdhNpOfCV5AKQY4j-SQ6Zthdb4NqTdVXbJ4IJHB41VLN2d42aZQDP3uFlst9Br2saPJcPYom6b5cG63lc1BCUr7Izv4eYBwf",
  "expirationTime": null,
  "keys": {
    "p256dh": "BKom49Uk6xGYno4u9j6h4LO7kiL0fgf4K3nlFHfzIroBKeMUjWnSy4onRwIW-5DuRmlQ-_L_xZf42NLU_RE79UQ",
    "auth": "RY7gNheybpiAAN1kQyXcfQ" }
}

push.sendNotification(sub, 'test message');
