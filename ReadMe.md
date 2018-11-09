Rich Filemanager
========================

This is our fork of RichFilemanager open-source project (https://github.com/servocoder/RichFilemanager/). Look there to see original readme and well-written wiki. It was adjusted to work with our application. Main changes are disabling functions which are unnecessary for us (moving, uploding etc.), making it single-page application with client-side routing and turning search into global with specific search results view.

Deployment
=======================
To make some changes in Filemanager and see it in FinCRM, you need to:
1. Do what you need to do in corresponding files of this project
2. run `grunt` command to make .min versions of your files
3. run `copytoCRM.sh` script to copy new versions of .min files to finCRM. It is assumed that relative path to your FinCRM folder from RichFileManager is '../FinCRM'. If it doesn't hold, of course you need to modify script properly. And of course it is also possible to copy files manually ;)


MIT LICENSE
-----------

Released under the [MIT license](http://opensource.org/licenses/MIT).