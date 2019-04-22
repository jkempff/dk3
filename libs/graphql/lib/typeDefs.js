const { gql } = require("apollo-server")

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  scalar Date

  type User {
    id: String
    email: String
    sendEmails: Boolean
    publicUsername: Boolean
    username: String
    upcomingEvents: [Event]
    skills: [String]
    calendarToken: String
    autoBookmark: Boolean
  }

  type AuthenticationInfo {
    tokenExpiresAt: Date
    softExpiresAt: Date
  }

  type Event {
    id: String
    title: String
    description: String
    url: String
    to: Date
    from: Date
    created: Date
    artists: [String]
    location: String
    approved: Boolean
    canceled: Boolean
    postponed: Boolean
    bookmarkedByMe: Boolean
    bookmarkedBy: [User]
    author: User
    fancyness: Int
    recentlyAdded: Int
  }

  type Query {
    # The viewing user
    me: User
    # Expiration info on used access token
    authInfo: AuthenticationInfo
    # Upcoming events
    upcomingEvents(filter: String): [Event]
    # Past events
    pastEvents: [Event]
    # Event by ID
    event(id: ID!): Event
  }

  input CreateEventInput {
    title: String!
    location: String!
    url: String
    from: Date!
    description: String
    to: Date
    autoBookmark: Boolean
  }

  input UpdateEventInput {
    id: ID!
    title: String
    location: String
    url: String
    from: Date
    description: String
    to: Date
    approved: Boolean
    canceled: Boolean
    postponed: Boolean
  }

  input ApproveEventInput {
    id: ID!
    approved: Boolean!
  }

  input BookmarkEventInput {
    id: ID!
    bookmarked: Boolean!
  }

  input UpdateSelfInput {
    id: ID!
    username: String
    sendEmails: Boolean
    autoBookmark: Boolean
    publicUsername: Boolean
  }

  input UpdateCalendarTokenInput {
    id: ID!
    enableCalendar: Boolean!
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event
    updateEvent(input: UpdateEventInput!): Event
    approveEvent(input: ApproveEventInput!): Event
    bookmarkEvent(input: BookmarkEventInput!): Event

    updateSelf(input: UpdateSelfInput!): User
    updateCalendarToken(input: UpdateCalendarTokenInput!): User
  }
`

module.exports = typeDefs
