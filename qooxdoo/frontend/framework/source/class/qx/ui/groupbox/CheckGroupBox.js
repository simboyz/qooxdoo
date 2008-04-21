/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/* ************************************************************************

#module(ui_form)

************************************************************************ */

/**
 * @appearance check-box-group-box-legend {qx.ui.form.CheckBox}
 */
qx.Class.define("qx.ui.groupbox.CheckGroupBox",
{
  extend : qx.ui.groupbox.GroupBox,





  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * Creates the legend sub widget. Instead of the normal <code>qx.ui.basic.Atom</code>
     * a <code>qx.ui.form.CheckBox</code> is used.
     *
     * @type member
     * @return {void}
     */
    _createLegendObject : function()
    {
      this._legendObject = new qx.ui.form.CheckBox();
      this._legendObject.setAppearance("check-box-group-box-legend");
      this._legendObject.setChecked(true);

      this._add(this._legendObject, {left: 10, top: 0});
    },

    setIcon : null,
    getIcon : null
  }
});
