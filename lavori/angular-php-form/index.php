<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form PHP e Json</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
  <link rel="stylesheet" href="style.css" />
</head>

<body ng-app="myApp">
  <div class="container">
      <form method="POST" class="form-container" action="gestione.php">
        <label for="name">Nome:</label>
        <input type="text" name="nome" class="form-input">
        <label for="cognome">Cognome:</label>
        <input type="text" name="cognome" class="form-input">
        <label for="email">Email:</label>
        <input type="text" name="email" class="form-input">
        <input type="submit" value="Registrati" class="register-button">
      </form>
    <div ng-controller="MainController" class="search-container">
      <input type="text" ng-model="searchText" placeholder="Cerca per nome..." class="search-bar" />
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 30%">Nome</th>
              <th style="width: 30%">Cognome</th>
              <th style="width: 40%">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="persona in (people | filter:searchText)">
              <td>{{ persona.Nome }}</td>
              <td>{{ persona.Cognome }}</td>
              <td>{{ persona.Email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
<script>
  angular
    .module("myApp", [])
    .controller("MainController", function($scope, $http) {
      $scope.people = [];

      $http.get("utenti.json").then(function(response) {
        $scope.people = response.data;
      });
    });
</script>

</html>