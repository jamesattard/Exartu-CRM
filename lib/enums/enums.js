Enums = {};
_.extend(Enums, {
    emailTemplatesCategories: {
        all: 'all',
        employee: 'employee',
        client: 'client',
        job: 'job',
        contact: 'contact'
    },
    hotListCategories: ['Employee', 'Client', 'Contact'],
    stringConstants: {
        SearchTags: "Search tags..."
    },
    lookUpAction: {
        Implies_Inactive: "Implies_Inactive",
        Implies_Deleted: "Implies_Deleted",
        Implies_Active: "Implies_Active",
        Deal_Won: "Deal_Won",
        Deal_Lost: "Deal_Lost",
        Candidate_Sendout: "Sendout",
        Candidate_Submittal: "Submittal",
        Candidate_Placed: "Placed",
        ContactMethod_Phone: "ContactMethod_Phone",
        ContactMethod_MobilePhone: "ContactMethod_MobilePhone",
        ContactMethod_WorkPhone: "ContactMethod_WorkPhone",
        ContactMethod_HomePhone: "ContactMethod_HomePhone",
        ContactMethod_EmergencyPhone: "ContactMethod_EmergencyPhone",
        ContactMethod_Email: "ContactMethod_Email",
        ContactMethod_WorkEmail: "ContactMethod_WorkEmail",
        ContactMethod_PersonalEmail: "ContactMethod_PersonalEmail",
        Address_WorksSite: "Address_WorksSite",
        Address_Billing: "Address_Billing",
        Address_Home: "Address_Home",
        Address_Temporary: "Address_Temporary",
        Job_Filled: "Job_Filled",
        Job_Unfilled: "Job_Unfilled",
        Job_Lost: "Job_Lost",
        JobTitle_Untitled: "JobTitle_Untitled",
        Placement_Candidate: "Candidate",
        Placement_Assigned: "Assigned",
        Is_RegularTime: "Regular Time",
        Is_Salary: "Salary",
        HowHeardOf_Referral: "HowHeardOfReferral",
        HowHeardOf_Internet: "HowHeardOf_Internet",
        HowHeardOf_Other: "HowHeardOf_Other",
        LeaderBoardType_Activity: "Activity",
        LeaderBoardType_DealPipeline: "Deal Pipeline",
        LeaderBoardType_LossReport: "Loss Report",
        LeaderBoardType_Contacts: "Contacts",
        Client_Lost: "Client_Lost",
        Client_Won: "Client_Won",
        Employee_Lost: "Employee_Lost",
        Employee_Won: "Employee_Won",
        Employee_Kiosk: "Employee_Kiosk",
        Employee_Online: "Employee_Online",
        Employee_ReceivedCV: "Employee_ReceivedCV"

    },
    lookUpCodes: {
        job_category: 0,
        job_industry: 1,
        job_duration: 2,
        job_status: 3,
        job_titles: 4,
        payRate_frequencies: 6,
        employee_status: 7,
        deal_status: 8,
        deal_dealRevenueFrequency: 9,
        candidate_status: 10,
        placement_status: 11,
        contact_status: 12,
        active_status: 13,
        client_status: 14,
        contactMethod_types: 16,
        placement_rate: 17,
        contactable_address: 18,
        howHeardOf: 19,
        leaderBoard: 20,
        client_lostReason: 21
    }
});
_.extend(Enums, {
    hierarchiesRelation: {
        isParent: 1,
        isChild: -1,
        notRelated: 0
    },
    lookUpTypes: {
        leaderBoard: {
            type: {
                lookUpCode: Enums.lookUpCodes.leaderBoard,
                displayName: "Leaderboards",
                lookUpActions: [Enums.lookUpAction.LeaderBoardType_Activity,Enums.lookUpAction.LeaderBoardType_DealPipeline,
                    Enums.lookUpAction.LeaderBoardType_Contacts,Enums.lookUpAction.LeaderBoardType_LossReport]
            }
        },
        howHeardOf: {
            type: {
                lookUpCode: Enums.lookUpCodes.howHeardOf,
                displayName: 'How heard of',
                lookUpActions: [Enums.lookUpAction.HowHeardOf_Internet,Enums.lookUpAction.HowHeardOf_Other,Enums.lookUpAction.HowHeardOf_Referral]
            }
        },
        deal: {
            status: {
                lookUpCode: Enums.lookUpCodes.deal_status,
                displayName: 'Deal statuses',
                lookUpActions: [Enums.lookUpAction.Implies_Inactive, Enums.lookUpAction.Implies_Deleted, Enums.lookUpAction.Implies_Active, Enums.lookUpAction.Deal_Won,
                    Enums.lookUpAction.Deal_Lost]
            },
            dealRevenueFrequency: {
                lookUpCode: Enums.lookUpCodes.deal_dealRevenueFrequency,
                displayName: 'Deal revenue frequency'
            }
        },
        candidate: {
            status: {
                lookUpCode: Enums.lookUpCodes.candidate_status,
                displayName: 'Candidate statuses',
                lookUpActions: [
                    Enums.lookUpAction.Candidate_Submittal, Enums.lookUpAction.Candidate_Sendout, Enums.lookUpAction.Candidate_Placed]
            }
        },
        placement: {
            status: {
                lookUpCode: Enums.lookUpCodes.placement_status,
                displayName: 'Placement statuses',
                lookUpActions: [Enums.lookUpAction.Implies_Inactive, Enums.lookUpAction.Implies_Active, Enums.lookUpAction.Implies_Deleted]
            },
            rate: {
                lookUpCode: Enums.lookUpCodes.placement_rate,
                displayName: 'Placement rates',
                lookUpActions: [Enums.lookUpAction.Is_RegularTime, Enums.lookUpAction.Is_Salary]
            }
        },
        job: {
            category: {
                lookUpCode: Enums.lookUpCodes.job_category,
                displayName: 'Job categories'
            },
            industry: {
                lookUpCode: Enums.lookUpCodes.job_industry,
                displayName: 'Job industries'
            },
            duration: {
                lookUpCode: Enums.lookUpCodes.job_duration,
                displayName: 'Job durations'
            },
            status: {
                lookUpCode: Enums.lookUpCodes.job_status,
                displayName: 'Job statuses',
                lookUpActions: [Enums.lookUpAction.Implies_Inactive, Enums.lookUpAction.Implies_Active, Enums.lookUpAction.Implies_Deleted,
                    Enums.lookUpAction.Job_Filled, Enums.lookUpAction.Job_Unfilled, Enums.lookUpAction.Job_Lost]
            },
            titles: {
                lookUpCode: Enums.lookUpCodes.job_titles,
                displayName: 'Job titles',
                lookUpActions: [Enums.lookUpAction.JobTitle_Untitled]
            }
        },
        employee: {
            status: {
                lookUpCode: Enums.lookUpCodes.employee_status,
                displayName: 'Employee statuses',
                lookUpActions: [Enums.lookUpAction.Employee_Lost,Enums.lookUpAction.Employee_Won,Enums.lookUpAction.Employee_Kiosk,
                    Enums.lookUpAction.Employee_Online,Enums.lookUpAction.Employee_ReceivedCV]
            }
        },
        contact: {
            status: {
                lookUpCode: Enums.lookUpCodes.contact_status,
                displayName: 'Contact statuses',
                lookUpActions: []
            }
        },
        client: {
            status: {
                lookUpCode: Enums.lookUpCodes.client_status,
                displayName: 'Client statuses',
                lookUpActions: [Enums.lookUpAction.Client_Lost,Enums.lookUpAction.Client_Won]
            },
            lostReason: {
                lookUpCode: Enums.lookUpCodes.client_lostReason,
                displayName: 'Client lost reasons',
                lookUpActions: []
            }
        },
        active: {
            status: {
                lookUpCode: Enums.lookUpCodes.active_status,
                displayName: 'Active statuses',
                lookUpActions: [Enums.lookUpAction.Implies_Inactive, Enums.lookUpAction.Implies_Active]
            }
        },
        payRate: {
            frequencies: {
                lookUpCode: Enums.lookUpCodes.payRate_frequencies,
                displayName: 'Pay rate frequencies'
            }
        },
        contactMethod: {
            type: {
                lookUpCode: Enums.lookUpCodes.contactMethod_types,
                displayName: 'Contact method types',
                lookUpActions: [Enums.lookUpAction.ContactMethod_Email, Enums.lookUpAction.ContactMethod_Phone, Enums.lookUpAction.ContactMethod_MobilePhone, Enums.lookUpAction.ContactMethod_HomePhone,
                    Enums.lookUpAction.ContactMethod_WorkPhone, Enums.lookUpAction.ContactMethod_WorkEmail, Enums.lookUpAction.ContactMethod_PersonalEmail, Enums.lookUpAction.ContactMethod_EmergencyPhone]
            }
        },
        linkedAddress: {
            type: {
                lookUpCode: Enums.lookUpCodes.contactable_address,
                displayName: 'Address types',
                lookUpActions: [Enums.lookUpAction.Address_Billing, Enums.lookUpAction.Address_Home, Enums.lookUpAction.Address_Temporary,
                    Enums.lookUpAction.Address_WorksSite]
            }
        }
    },
    documentType: {
        picture: {
            lookUpCode: 0,
            displayName: 'Picture'
        }
    },
    fieldType: {
        string: 0,
        int: 1,
        date: 2,
        select: 3,
        checkbox: 4,
        lookUp: 5
    },
    activitiesType: {
        contactableAdd: 0,
        messageAdd: 1,
        taskAdd: 2,
        jobAdd: 3,
        placementEdit: 4,
        placementAdd: 5,
        candidateAdd: 7,
        dealAdd: 6,
        userLogin: 9,
        noteAdd: 10,
        contactableUpdate: 11,
        fileAdd: 12
    },
    objGroupType: {
        contactable: 'contactable',
        job: 'job',
        deal: 'deal',
        quote: 'quote',
        placement: 'placement',
        hotList: 'hotList'
    },
    personType: {
        human: 'person',
        organization: 'organization'
    },
    roleFunction: {
        System_Administrator: 'System_Administrator',
        Client_Administrator: 'Client_Administrator',
        Recruiter_Consultant: 'Recruiter_Consultant',
        Staffing_Specialist: 'Recruiter_Consultant',
        Hiring_Manager: 'Hiring_Manager',
        Sales_Manager: 'Sales_Manager',
        Sales_Executive: 'Sales_Executive',
        Job_Applicant: 'Recruiter_Consultant',
        Contract_EmployeeEmployee: 'Recruiter_Consultant',
        Direct_Employee: 'Direct_Employee'
    },
    permissionFunction: {
        Sysadmin: 'SysAdmin',
        ClientAdmin: 'ClientAdmin',
        CRM: 'CRM',
        Sales: 'Sales',
        Recruiting: 'Recruiting'

    },
    candidateType: {
        recruiter: 'recruiter',
        applicant: 'applicant'
    },
    taskState: {
        future: 'Future',
        completed: 'Completed',
        pending: 'Pending',
        overDue: 'Over Due'
    },
    noteState: {
        upcoming: 'Upcoming',
        overDue: 'Over Due'
    },
    contactMethodTypes: {
        phone: 0,
        other: 1,
        email: 2
    },
    linkTypes: {
        contactable: {
            value: 0,
            displayName: 'Contacts'
        },
        job: {
            value: 1,
            displayName: 'Jobs'
        },
        deal: {
            value: 2,
            displayName: 'Deals'
        },
        placement: {
            value: 3,
            displayName: 'Placements'
        },
        hotList: {
            value: 4,
            displayName: 'HotLists'
        },
        dashboard: {
            value: 5,
            displayName: 'Dashboard'
        }

    },
    lastUsedType: {
        client: 0,
        employee: 1
    },
    docCenterMergeFieldTypes: {
        contactable: 0,
        address: 1
    },
    gender: {
        male: {value:'m', displayName: 'Male'},
        female: {value:'f', displayName: 'Female'}
    },
    ethnicity: {
        caucasian: {value:'caucasian', displayName: 'Caucasian'},
        africanAmerican: {value:'africanAmerican', displayName: 'African American'},
        asian: {value:'asian', displayName: 'Asian'},
        other: {value:'other', displayName: 'Other'}
    },
    workFlowTypes:{
        jobOffer:'jobOffer',
        placementConfirm:'placementconfirm'
    }
});

_.extend(Enums, {
  userOrigin:{
    invitation: 'invitation',
    jobBoard: 'jobBoard',
    appCenter: 'appCenter',
    hrcKiosk: 'hrcKiosk'
  }
});
