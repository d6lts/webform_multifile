
Drupal.behaviors.webform_multifile = function (context) {
  var id = '#' + Drupal.settings.webform_multifile.id;
  $(id + ' input').attr('name', $(id + ' input').attr('name') + '[]');
}