/**
 * Created by visualaram on 1/27/15.
 */
Meteor.methods({
  addEditAddress: function (addr) {
    return AddressManager.addEditAddress(addr);
  },
  removeAddress: function(id) {
    AddressManager.removeAddress(id);
  }
});