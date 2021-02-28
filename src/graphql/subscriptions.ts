/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSupporter = /* GraphQL */ `
  subscription OnCreateSupporter {
    onCreateSupporter {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSupporter = /* GraphQL */ `
  subscription OnUpdateSupporter {
    onUpdateSupporter {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSupporter = /* GraphQL */ `
  subscription OnDeleteSupporter {
    onDeleteSupporter {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIssue = /* GraphQL */ `
  subscription OnCreateIssue {
    onCreateIssue {
      id
      category
      snippet
      position
      detailedPosition
      tags
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIssue = /* GraphQL */ `
  subscription OnUpdateIssue {
    onUpdateIssue {
      id
      category
      snippet
      position
      detailedPosition
      tags
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIssue = /* GraphQL */ `
  subscription OnDeleteIssue {
    onDeleteIssue {
      id
      category
      snippet
      position
      detailedPosition
      tags
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      eventName
      date
      time
      location
      summary
      image
      registration {
        id
        email
        event {
          id
          eventName
          date
          time
          location
          summary
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      eventName
      date
      time
      location
      summary
      image
      registration {
        id
        email
        event {
          id
          eventName
          date
          time
          location
          summary
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      eventName
      date
      time
      location
      summary
      image
      registration {
        id
        email
        event {
          id
          eventName
          date
          time
          location
          summary
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEventRegistration = /* GraphQL */ `
  subscription OnCreateEventRegistration {
    onCreateEventRegistration {
      id
      email
      event {
        id
        eventName
        date
        time
        location
        summary
        image
        registration {
          id
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventRegistration = /* GraphQL */ `
  subscription OnUpdateEventRegistration {
    onUpdateEventRegistration {
      id
      email
      event {
        id
        eventName
        date
        time
        location
        summary
        image
        registration {
          id
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventRegistration = /* GraphQL */ `
  subscription OnDeleteEventRegistration {
    onDeleteEventRegistration {
      id
      email
      event {
        id
        eventName
        date
        time
        location
        summary
        image
        registration {
          id
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContactMessage = /* GraphQL */ `
  subscription OnCreateContactMessage {
    onCreateContactMessage {
      id
      email
      firstName
      lastName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContactMessage = /* GraphQL */ `
  subscription OnUpdateContactMessage {
    onUpdateContactMessage {
      id
      email
      firstName
      lastName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContactMessage = /* GraphQL */ `
  subscription OnDeleteContactMessage {
    onDeleteContactMessage {
      id
      email
      firstName
      lastName
      message
      createdAt
      updatedAt
    }
  }
`;
