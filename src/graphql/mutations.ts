/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSupporter = /* GraphQL */ `
  mutation CreateSupporter(
    $input: CreateSupporterInput!
    $condition: ModelSupporterConditionInput
  ) {
    createSupporter(input: $input, condition: $condition) {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const updateSupporter = /* GraphQL */ `
  mutation UpdateSupporter(
    $input: UpdateSupporterInput!
    $condition: ModelSupporterConditionInput
  ) {
    updateSupporter(input: $input, condition: $condition) {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const deleteSupporter = /* GraphQL */ `
  mutation DeleteSupporter(
    $input: DeleteSupporterInput!
    $condition: ModelSupporterConditionInput
  ) {
    deleteSupporter(input: $input, condition: $condition) {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const createIssue = /* GraphQL */ `
  mutation CreateIssue(
    $input: CreateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    createIssue(input: $input, condition: $condition) {
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
export const updateIssue = /* GraphQL */ `
  mutation UpdateIssue(
    $input: UpdateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    updateIssue(input: $input, condition: $condition) {
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
export const deleteIssue = /* GraphQL */ `
  mutation DeleteIssue(
    $input: DeleteIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    deleteIssue(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createEventRegistration = /* GraphQL */ `
  mutation CreateEventRegistration(
    $input: CreateEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    createEventRegistration(input: $input, condition: $condition) {
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
export const updateEventRegistration = /* GraphQL */ `
  mutation UpdateEventRegistration(
    $input: UpdateEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    updateEventRegistration(input: $input, condition: $condition) {
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
export const deleteEventRegistration = /* GraphQL */ `
  mutation DeleteEventRegistration(
    $input: DeleteEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    deleteEventRegistration(input: $input, condition: $condition) {
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
export const createContactMessage = /* GraphQL */ `
  mutation CreateContactMessage(
    $input: CreateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    createContactMessage(input: $input, condition: $condition) {
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
export const updateContactMessage = /* GraphQL */ `
  mutation UpdateContactMessage(
    $input: UpdateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    updateContactMessage(input: $input, condition: $condition) {
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
export const deleteContactMessage = /* GraphQL */ `
  mutation DeleteContactMessage(
    $input: DeleteContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    deleteContactMessage(input: $input, condition: $condition) {
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
