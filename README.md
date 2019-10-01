# Grub-Background-Changer

* Get the Grub-Customizer
   ```shell
  sudo apt-get grub-customizer
  ```

* Set the Images Folder in Grub Background


* Get the Dependencies
  ```shell
  sudo apt-get install -y nodejs
  sudo npm install request cheerio fs
  ```


* Run the .js file to download the image
  ```shell
  node scrap.js
  ```


* Update Grub to get the downloaded image as your Grub background
  ```shell
  sudo update-grub
  ```
  
* The image is set as your BG image for grub!!

