export default `query {
  uwu: Page { 
    notifs: notifications {  
      ... on AiringNotification {
        id
        animeId
        type
        episode
        contexts
        createdAt
        anime: media {
          id
          title { userPreferred }
          type
        }
      }
      ... on FollowingNotification {
        id
        userId
        type
        context
        createdAt 
        user {
          id
          name
        }
      }
      ... on ActivityMessageNotification {
        id
        userId
        type
        activityId
        context
        createdAt
        user {
          id
          name
        }
        message {
          id
          msg: message
        }
      }
      ... on ActivityMentionNotification {
        id
        userId
        type
        activityId
        context
        createdAt
        user {
          id
          name
        }
      }
      ... on ActivityReplyNotification {
        id
        userId
        type
        activityId  
        context
        createdAt
        user {
          id
          name
        }
      }
      ... on ActivityLikeNotification {
        id
        userId
        type
        activityId 
        context
        createdAt
        user {
          id
          name
        }
      }
      ... on ActivityReplyLikeNotification {
        id
        userId
        type
        activityId 
        context
        createdAt
        user {
          id
          name
        }
      }
      ... on ThreadLikeNotification {
        id
        userId
        type
        threadId
        context
        createdAt
        user {
          id
          name
        }
      }
    } 
  }
}`;