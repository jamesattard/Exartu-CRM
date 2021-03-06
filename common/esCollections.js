// Contactables
Meteor.startup(function () {

	var indexName = 'exartu'; //default
	if (Meteor.isServer){
		indexName = process.env.ES_INDEX_NAME || ExartuConfig.ES_INDEX_NAME;
		__meteor_runtime_config__.indexName = indexName; // pass it to the client
	}
	if (Meteor.isClient){
		indexName = __meteor_runtime_config__.indexName;
	}

	ES.syncCollection({
		collection: Contactables,
		indexName: indexName,
		type: 'contactables',
		fields: [
			{ name: 'idField', label: 'Id', search: false },
			{ name: 'hierId', label: 'HierId', mapping: { type: 'string', index: "not_analyzed" }, search: false },
			{ name: '_id', label: '_id', mapping: { type: 'string', index: "not_analyzed" }, search: false  },
			{ name: 'externalId', label: 'external id', transform: function (value) {
				return value && value.toString();
			}},
			{ name: 'userId', label: 'User Id', mapping: { type: 'string', index: "not_analyzed" }, search: false  },
			{ name: 'objNameArray', label: 'ObjNameArray', mapping: { type: 'string', index: "not_analyzed" }, search: false  },
			{ name: 'activeStatus', label: 'Active status', mapping: { type: 'string', index: "not_analyzed" }, search: false  },
			{ name: 'statusNote', label: 'Status note' },
			{ name: 'tags', label: 'tags' },
			{ name: 'contactMethods', label: 'Contact method', mapping: { type: 'string'}, transform: function (value) {
				return _.pluck(value, 'value');
			}
			},
			{ name: 'dateCreated', label: 'Date created', search: false, mapping: { type: 'date'}, transform: function (value) {
				if (! value) return null;

				if (!_.isDate(value)) {
					return new Date(value);
				}
				return value;
			} },

			{ name: 'person.firstName', label: 'First name', boost:5 },
			{ name: 'person.lastName', label: 'Last name', boost:5 },
			{ name: 'person.middleName', label: 'Middle name', boost:3 },
			{ name: 'person.jobTitle', label: 'Job title' },

			{ name: 'organization.organizationName', label: 'Organization name', boost:5 },
			{ name: 'Client.department', label: 'Deparment', boost:3 },

			{ name: 'Employee.status', label: 'status', search: false  },
			{ name: 'Employee.taxID', label: 'SSN' }
		],
		// Retrive data related to items on this collections
		// If idFiled is defined then its a "inverse relation"
		relations: [{
			idField: 'links.id',
			fieldName: 'notes',
			valuePath: 'msg',
			collection:	Notes,
			mapping: { type: 'string', analyzer: "english" }
		},{
			idField: 'linkId',
			fieldName: 'addresses',
			valuePath: 'address',
			collection:	Addresses
		},{
			idField: 'linkId',
			fieldName: 'city',
			valuePath: 'city',
			collection:	Addresses
		},{
			idField: 'linkId',
			fieldName: 'state',
			valuePath: 'state',
			collection:	Addresses
		},{
			idField: 'linkId',
			fieldName: 'country',
			valuePath: 'country',
			collection:	Addresses
		}
		]
	});
})