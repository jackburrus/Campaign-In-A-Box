/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSupporterInput = {
  id?: string | null,
  email: string,
  zip: string,
};

export type ModelSupporterConditionInput = {
  email?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  and?: Array< ModelSupporterConditionInput | null > | null,
  or?: Array< ModelSupporterConditionInput | null > | null,
  not?: ModelSupporterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Supporter = {
  __typename: "Supporter",
  id?: string,
  email?: string,
  zip?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateSupporterInput = {
  id: string,
  email?: string | null,
  zip?: string | null,
};

export type DeleteSupporterInput = {
  id?: string | null,
};

export type CreateIssueInput = {
  id?: string | null,
  category: string,
  snippet?: string | null,
  position?: string | null,
  detailedPosition?: string | null,
  tags?: Array< string | null > | null,
  image?: string | null,
};

export type ModelIssueConditionInput = {
  category?: ModelStringInput | null,
  snippet?: ModelStringInput | null,
  position?: ModelStringInput | null,
  detailedPosition?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelIssueConditionInput | null > | null,
  or?: Array< ModelIssueConditionInput | null > | null,
  not?: ModelIssueConditionInput | null,
};

export type Issue = {
  __typename: "Issue",
  id?: string,
  category?: string,
  snippet?: string | null,
  position?: string | null,
  detailedPosition?: string | null,
  tags?: Array< string | null > | null,
  image?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateIssueInput = {
  id: string,
  category?: string | null,
  snippet?: string | null,
  position?: string | null,
  detailedPosition?: string | null,
  tags?: Array< string | null > | null,
  image?: string | null,
};

export type DeleteIssueInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  eventName: string,
  date?: string | null,
  time?: string | null,
  location?: string | null,
  summary?: string | null,
  image?: string | null,
  eventRegistrationId?: string | null,
};

export type ModelEventConditionInput = {
  eventName?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id?: string,
  eventName?: string,
  date?: string | null,
  time?: string | null,
  location?: string | null,
  summary?: string | null,
  image?: string | null,
  registration?: EventRegistration,
  createdAt?: string,
  updatedAt?: string,
};

export type EventRegistration = {
  __typename: "EventRegistration",
  id?: string,
  email?: string | null,
  event?: Event,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateEventInput = {
  id: string,
  eventName?: string | null,
  date?: string | null,
  time?: string | null,
  location?: string | null,
  summary?: string | null,
  image?: string | null,
  eventRegistrationId?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateEventRegistrationInput = {
  id?: string | null,
  email?: string | null,
  eventRegistrationEventId?: string | null,
};

export type ModelEventRegistrationConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelEventRegistrationConditionInput | null > | null,
  or?: Array< ModelEventRegistrationConditionInput | null > | null,
  not?: ModelEventRegistrationConditionInput | null,
};

export type UpdateEventRegistrationInput = {
  id: string,
  email?: string | null,
  eventRegistrationEventId?: string | null,
};

export type DeleteEventRegistrationInput = {
  id?: string | null,
};

export type CreateContactMessageInput = {
  id?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  message?: string | null,
};

export type ModelContactMessageConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactMessageConditionInput | null > | null,
  or?: Array< ModelContactMessageConditionInput | null > | null,
  not?: ModelContactMessageConditionInput | null,
};

export type ContactMessage = {
  __typename: "ContactMessage",
  id?: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  message?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateContactMessageInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  message?: string | null,
};

export type DeleteContactMessageInput = {
  id?: string | null,
};

export type ModelSupporterFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  and?: Array< ModelSupporterFilterInput | null > | null,
  or?: Array< ModelSupporterFilterInput | null > | null,
  not?: ModelSupporterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSupporterConnection = {
  __typename: "ModelSupporterConnection",
  items?:  Array<Supporter | null > | null,
  nextToken?: string | null,
};

export type ModelIssueFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  snippet?: ModelStringInput | null,
  position?: ModelStringInput | null,
  detailedPosition?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelIssueFilterInput | null > | null,
  or?: Array< ModelIssueFilterInput | null > | null,
  not?: ModelIssueFilterInput | null,
};

export type ModelIssueConnection = {
  __typename: "ModelIssueConnection",
  items?:  Array<Issue | null > | null,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  eventName?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
};

export type ModelEventRegistrationFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelEventRegistrationFilterInput | null > | null,
  or?: Array< ModelEventRegistrationFilterInput | null > | null,
  not?: ModelEventRegistrationFilterInput | null,
};

export type ModelEventRegistrationConnection = {
  __typename: "ModelEventRegistrationConnection",
  items?:  Array<EventRegistration | null > | null,
  nextToken?: string | null,
};

export type ModelContactMessageFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactMessageFilterInput | null > | null,
  or?: Array< ModelContactMessageFilterInput | null > | null,
  not?: ModelContactMessageFilterInput | null,
};

export type ModelContactMessageConnection = {
  __typename: "ModelContactMessageConnection",
  items?:  Array<ContactMessage | null > | null,
  nextToken?: string | null,
};

export type CreateSupporterMutationVariables = {
  input?: CreateSupporterInput,
  condition?: ModelSupporterConditionInput | null,
};

export type CreateSupporterMutation = {
  createSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSupporterMutationVariables = {
  input?: UpdateSupporterInput,
  condition?: ModelSupporterConditionInput | null,
};

export type UpdateSupporterMutation = {
  updateSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSupporterMutationVariables = {
  input?: DeleteSupporterInput,
  condition?: ModelSupporterConditionInput | null,
};

export type DeleteSupporterMutation = {
  deleteSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIssueMutationVariables = {
  input?: CreateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type CreateIssueMutation = {
  createIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIssueMutationVariables = {
  input?: UpdateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type UpdateIssueMutation = {
  updateIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIssueMutationVariables = {
  input?: DeleteIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type DeleteIssueMutation = {
  deleteIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input?: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input?: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input?: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventRegistrationMutationVariables = {
  input?: CreateEventRegistrationInput,
  condition?: ModelEventRegistrationConditionInput | null,
};

export type CreateEventRegistrationMutation = {
  createEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventRegistrationMutationVariables = {
  input?: UpdateEventRegistrationInput,
  condition?: ModelEventRegistrationConditionInput | null,
};

export type UpdateEventRegistrationMutation = {
  updateEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventRegistrationMutationVariables = {
  input?: DeleteEventRegistrationInput,
  condition?: ModelEventRegistrationConditionInput | null,
};

export type DeleteEventRegistrationMutation = {
  deleteEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMessageMutationVariables = {
  input?: CreateContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type CreateContactMessageMutation = {
  createContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMessageMutationVariables = {
  input?: UpdateContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type UpdateContactMessageMutation = {
  updateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMessageMutationVariables = {
  input?: DeleteContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type DeleteContactMessageMutation = {
  deleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSupporterQueryVariables = {
  id?: string,
};

export type GetSupporterQuery = {
  getSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSupportersQueryVariables = {
  filter?: ModelSupporterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSupportersQuery = {
  listSupporters?:  {
    __typename: "ModelSupporterConnection",
    items?:  Array< {
      __typename: "Supporter",
      id: string,
      email: string,
      zip: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIssueQueryVariables = {
  id?: string,
};

export type GetIssueQuery = {
  getIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIssuesQueryVariables = {
  filter?: ModelIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIssuesQuery = {
  listIssues?:  {
    __typename: "ModelIssueConnection",
    items?:  Array< {
      __typename: "Issue",
      id: string,
      category: string,
      snippet?: string | null,
      position?: string | null,
      detailedPosition?: string | null,
      tags?: Array< string | null > | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id?: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventRegistrationQueryVariables = {
  id?: string,
};

export type GetEventRegistrationQuery = {
  getEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventRegistrationsQueryVariables = {
  filter?: ModelEventRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventRegistrationsQuery = {
  listEventRegistrations?:  {
    __typename: "ModelEventRegistrationConnection",
    items?:  Array< {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContactMessageQueryVariables = {
  id?: string,
};

export type GetContactMessageQuery = {
  getContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactMessagesQueryVariables = {
  filter?: ModelContactMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactMessagesQuery = {
  listContactMessages?:  {
    __typename: "ModelContactMessageConnection",
    items?:  Array< {
      __typename: "ContactMessage",
      id: string,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      message?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSupporterSubscription = {
  onCreateSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSupporterSubscription = {
  onUpdateSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSupporterSubscription = {
  onDeleteSupporter?:  {
    __typename: "Supporter",
    id: string,
    email: string,
    zip: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIssueSubscription = {
  onCreateIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIssueSubscription = {
  onUpdateIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIssueSubscription = {
  onDeleteIssue?:  {
    __typename: "Issue",
    id: string,
    category: string,
    snippet?: string | null,
    position?: string | null,
    detailedPosition?: string | null,
    tags?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    date?: string | null,
    time?: string | null,
    location?: string | null,
    summary?: string | null,
    image?: string | null,
    registration?:  {
      __typename: "EventRegistration",
      id: string,
      email?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        eventName: string,
        date?: string | null,
        time?: string | null,
        location?: string | null,
        summary?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventRegistrationSubscription = {
  onCreateEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventRegistrationSubscription = {
  onUpdateEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventRegistrationSubscription = {
  onDeleteEventRegistration?:  {
    __typename: "EventRegistration",
    id: string,
    email?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      eventName: string,
      date?: string | null,
      time?: string | null,
      location?: string | null,
      summary?: string | null,
      image?: string | null,
      registration?:  {
        __typename: "EventRegistration",
        id: string,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactMessageSubscription = {
  onCreateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactMessageSubscription = {
  onUpdateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactMessageSubscription = {
  onDeleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
