# 🌱Welcome to project Food Wastage Detection and Prevention

## 🎥 Promotional Video
[Our project video](https://csprojects.nottingham.edu.cn/scyyg4/food-wastage-detection-and-prevention/blob/main/docs/image/video.mp4)

![Promotional Video](/docs/image/promotional_video.gif)

---

## 🏡Introduction
### Motivation
- With the increasing awareness of sustainable development and environmental protection in society, the catering industry is paying more and more attention to **reducing food waste**. We plan to develop a website that combines facial recognition and food recognition technology. 

### Features
- Users can automatically detect the remaining amount of food during the dining process by uploading photos or videos. By analyzing food waste data, restaurants can adjust their menus according to the actual needs of diners, reduce waste, and improve operational efficiency. Our system will read and analyze the photos provided by the user, and store the cooked utensils. The generated report will be personalized and provided to the user and restaurant administrator.

- For **users**, we design an interface for uploading photos and conduct data analysis based on the identified information to provide information on waste and missing nutrients.

- **Managers** can view all uploaded data and analyze their proportions to make adjustments.This system not only helps optimize the restaurant supply chain, but also promotes social environmental protection concepts, reduces resource waste, and enhances customers' dining experience. 

---
## 📑Background Research
- [Background Research](docs/backgroundResearch/Background_Research.docx)

---
## 📑Test Plan
- [Test Plan](docs/test_report.md)

---

## 📑Class Diagram
- [Class Diagram](images/Class_Diagram_User_.png)

---

## 📑Sequence Diagram
- [Sequence Diagram](images/user_seq.png)

---
## 🌟Features
<p align="center">
  <img src="/docs/image/features.png" width="700" height="400">
</p>

---

## 👨‍💻 Individual Contribution

### Yan GE

I was mainly responsible for the deep learning and intelligent analysis components of the system. My work covered the full AI pipeline from user identification to food waste and nutrition analysis.

My main contributions include:

* Implemented the **face recognition module** to identify users and link each uploaded record to the corresponding user profile in the database.
* Developed the **food classification module** to recognize different food categories from uploaded images.
* Built the **food segmentation module** to locate and separate food regions from the input images.
* Integrated **image depth estimation** to support food volume estimation from 2D food images.
* Designed the **food volume and mass estimation pipeline**, combining segmentation results, depth information, and food density data.
* Integrated the **FatSecret API** to retrieve food density and nutritional information for recognized food items.
* Calculated the estimated **food mass, calories, and nutritional composition** based on the recognized food type, estimated volume, and external nutrition data.
* Stored the analysis results into the corresponding database entries based on the recognized user identity.
* Deployed a lightweight local **LLM-based recommendation module**, which reads the user’s historical food waste and nutrition records from the database and generates personalized dietary suggestions and food waste analysis reports.

----

## 📧Contributors
- [Yan GE](contributors/YanGe.md)
- [Minjie WU](contributors/MinjieWu.md)
- [Gaoshang DONG](contributors/GaoshangDong.md)
- [Yutao DAI](contributors/YutaoDai.md)
- [Letian PAN](contributors/LetianPan.md)
- [Chenghuan PIAO](contributors/ChenghuanPiao.md)



