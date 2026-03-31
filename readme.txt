
step-1:

i gonna create manifest.json - because it shows the details of the extension i made 
{
  "manifest_version": 3, -- its version 
  "name": "Focus Mode - Joe", -- name and title of the extension that i made 
  "version": "1.0", -- the version of extension 
  "description": "Block distracting sites", --description
  "permissions": ["storage"], -- permissions to access the what i needed 
  "action": {
    "default_popup": "popup.html" -- action 
  },
  "content_scripts": [
    {
      "matches": [
        "*://*.youtube.com/*",    -- main work that my extension gonna do
        "*://*.instagram.com/*"
      ],
      "js": ["content.js"]      -- inner content of my code to run the extension 
    }
  ]
}

step-2:

make the body of the extension [popup.html]
    link the css file [style.css]

add the title 
add the custom messege box using input tag 
To show status either on or off use the p tag 

to add the toggle button we choose lable tag and add input checkbox and an span tag for inner circle

Step-3:

create css file name as style.css 
  Add the necessary css as per your wish 

Step-4:


    
