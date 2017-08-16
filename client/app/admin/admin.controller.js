'use strict';

angular.module('bjarnigApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Course) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.courses = Course.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    // var dropbox = document.getElementById("dropbox");
    // $scope.message = 'Drop files here...';
    
    // function dragEnterLeave(evt) {
    //     evt.stopPropagation();
    //     evt.preventDefault();
    //     $scope.$apply(function() {
    //         $scope.message = 'Drop files here below...';
    //         $scope.dropClass = '';
    //     })
    // }

    // dropbox.addEventListener("dragenter", dragEnterLeave, false);
    // dropbox.addEventListener("dragleave", dragEnterLeave, false);
    // dropbox.addEventListener("dragover", function(evt) {
    //     evt.stopPropagation();
    //     evt.preventDefault();
    //     var clazz = 'not-available';
    //     var ok = evt.dataTransfer && evt.dataTransfer.types && evt.dataTransfer.types.indexOf('Files') >= 0
    //     $scope.$apply(function() {
    //         $scope.message = ok ? 'Drop files here...' : 'Only files are allowed!';
    //         $scope.dropClass = ok ? 'over' : 'not-available';
    //     })
    // }, false)
    // dropbox.addEventListener("drop", function(evt) {
    //     evt.stopPropagation();
    //     evt.preventDefault();
    //     $scope.progressVisible = false;
    //     $scope.$apply(function() {
    //         $scope.message = 'Drop files here below...';
    //         $scope.dropClass = '';
    //     })

    //     var files = evt.dataTransfer.files;

    //     if (files.length > 0) {
    //         $scope.$apply(function() {
    //             $scope.files = [];
    //             for (var i = 0; i < files.length; i++) {
    //                 $scope.files.push(files[i]);
    //             }
    //         })
    //     }

    // }, false)
    
    // $scope.setFiles = function(element) {
    //     $scope.files = [];

    //     $scope.$apply(function($scope) {
    //         $scope.files = [];
    //         for (var i = 0; i < element.files.length; i++) {
    //             $scope.files.push(element.files[i]);
    //         }
    //         $scope.progressVisible = false;
    //     });
    // };

    $scope.uploadFile = function() {
        var fd = new FormData();
        
        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i]);
        }

        console.log('BG-DEBUG (84, admin.controller.js)'.concat(JSON.stringify($scope.files.length)));
        console.log('BG-DEBUG (85, admin.controller.js)'.concat(JSON.stringify(fd)));
        
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "api/courses");
        $scope.progressVisible = true;
        xhr.send(fd);
    }

    function uploadProgress(evt) {
        $scope.$apply(function() {
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total) + '%';
            } else {
                $scope.progress = 'unable to compute';
            }
        })
    }

    $scope.progress = null;
    $scope.progressTimeout = null;
    var displayMessage = function(message) {
        if ($scope.progressTimeout) {
            $timeout.cancel($scope.progressTimeout);
        }
        $scope.progress = message;
        $scope.progressTimeout = $timeout(function(){
            $scope.progress = null;
            $scope.progressTimeout = null;
        }, 3000);
    }

    function uploadComplete(evt) {
        displayMessage('Upload Complete');
        $scope.load();
    }

    function uploadFailed(evt) {
        $scope.errorMessage = "There was an error attempting to upload the file.";
    }

    function uploadCanceled(evt) {
        $scope.$apply(function() {
            $scope.progressVisible = false
        });
        $scope.errorMessage ="The upload has been canceled by the user or the browser dropped the connection.";
    }
    $scope.showDeleteModal = function(item) {
        $scope.toDeleteItem = item;
        // We need to set persist=false
        // so that the dialog is destroyed when closed
        $modal({
            template: '/bundles/data/files/delete_modal.html',
            scope: $scope,
            persist: false
        }).then(function(modal) {});
    };

  });
