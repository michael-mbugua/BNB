<h1>AIR-BNB BACK-END API</h1>
<p>This Project is about helping visitors or those who want to travel book hotels where they will spend their time during the vacation</p>
<h3>API</h3>
<p>An API is (<i>application programming interface</i>) makes it easier for programmers to design a web page and also enhances communication within different gadets.</br>
In this project the API is designed using Ruby and rails as the framework.</p>
<h3>API ENDPOINTS</h3>
<p> This Api is basically simple and it performs all the CRUD operations (<i><b>create,read,update,delete</b></i>)it has used the activeRecord,cookies and sessions,serializers and validations.</p>
<ul>Cookies and sessions :<i>This is to enable to track the session and also enable the authentication and authorization.</i></ul>
<ul>Validations :<i>this will make it easier for the front end to collect only wanted data for example in this case in the booking page you must inlude tha check in date,the checkout date and the number of people who will be staying in the hotel</i></ul>
<ul>Serializer :<i>when displaying information on the front end there are some informations we do not want to include eg: created at and updated at then the serializer will only include data that you want to be shown</i></ul>
</br>
</br>
 <h3>DATABASE</h3>
 <p>This api is connected to Postgres database</p>
 <h3>some endpoints</h3>
 <li><i><a>localhost://3000/houses</a></i> : this will take you to all added houses</li>
 <li><i>localhost://3000/users</i>:this will take you to all added users</li>
 <li><i>localhost://3000/bookings</i>:this will take you to all added bookings</li>