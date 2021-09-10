const express = require('express');
const redis = require('redis');

const publisher = redis.createClient();

const channel = 'sony sports';


function publish(){
  publisher.publish(channel, 'India vs England');
}

publish();