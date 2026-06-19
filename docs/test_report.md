# Test Plan (and eventually Test Report)

|Contents|
|--------|
|[Team Number](#team-number)|
|[Meeting Records ](#meeting-records)|
|[APP Testing](#app-testing)|
|[Website Testing](#website-testing)|

## Team Management

### Team Number

|Name|
|------------|
|[Yan GE](contributors/YanGe.md)|
|[Minjie WU](contributors/MinjieWu.md)|
|[Gaoshang DONG](contributors/GaoshangDong.md)|
|[Yutao DAI](contributors/YutaoDai.md)|
|[Letian PAN](contributors/LetianPan.md)|
|[Chenghuan PIAO](contributors/ChenghuanPiao.md)|

## System Test

### APP Testing

#### Login Page

|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 1.1.1 | Login button | Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.2 | Login button | Input "Lily1221" in user name text field $\newline\rightarrow\newline$ Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.3 | Login button | Input "000000" in password text field $\newline\rightarrow\newline$ Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.4 | Login button | Input "Lily1221" in user name text field $\newline\rightarrow\newline$ Input "000000" in password text field $\newline\rightarrow\newline$ Click login button | Successfully enter the Login Page | Successfully enter the Login Page | Pass | 

#### Create Account Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 2.1.1 | Sign up button | Click Sign up button | Alert without username or password or email | Alert without username or password or email | Pass |
| 2.1.2 | Sign up button | Input "cs" in user name text field $\newline\rightarrow\newline$ Click Sign up button | Alert without username or password or email | Alert without username or password or email | Pass |
| 2.1.3 | Sign up button | Input "00000" in password text field $\newline\rightarrow\newline$ Click Sign up button | Alert without username or password or email | Alert without username or password or email | Pass |
| 2.1.4 | Sign up button | Input "csgroup5@nottingham" in email text field $\newline\rightarrow\newline$ Click Sign up button | Alert without username or password or email | Alert without username or password or email | Pass |
| 2.1.5 | Sign up button | Input "cs" in user name text field $\newline\rightarrow\newline$ Input "000000" in password text field $\newline\rightarrow\newline$ Input "csgroup5@nottingham" in email text field $\newline\rightarrow\newline$ Click Sign up button | Successfully enter the Home Page | Successfully enter the Home Page | Pass |

#### Home Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 3.1.1 | Navigation bar | Click Home button | Successfully enter the Home Page | Successfully enter the Home Page | Pass |
| 3.1.2 | Navigation bar | Click Photo button | Successfully enter the Photo Page | Successfully enter the Photo Page | Pass |
| 3.1.3 | Navigation bar | Click Report button | Successfully enter the Report Page | Successfully enter the Report Page | Pass |
| 3.1.4 | Navigation bar | Click Me button | Successfully enter the User Information Page | Successfully enter the User Information Page | Pass |
| 3.2.1 | Food Analysis button | Click Food Analysis button | Successfully enter the Food Analysis Page | Successfully enter the Food Analysis Page | Pass |

#### History Record Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 4.1.1 | Nutrition Analysis button | Click Nutrition Analysis button | Successfully enter the Nutrition Analysis Page | Successfully enter the Nutrition Analysis Page | Pass |
| 4.2.1 | Diet Advice button | Click Diet Advice button | Successfully enter the Diet Advice Page | Successfully enter the Diet Advice Page | Pass |

#### Photo Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 5.1.1 | Camera button | Click Camera button | Successfully enter the Real-time camera | Successfully enter the Real-time camera | Pass |
| 5.2.1 | Photo album button | Click Photo album button | Successfully enter the Local photo album | Successfully enter the Local photo album | Pass |

### Website Testing

#### Login Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 1.1.1 | Login button | Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.2 | Login button | Input "scylp2" in user name text field $\newline\rightarrow\newline$ Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.3 | Login button | Input "123456" in password text field $\newline\rightarrow\newline$ Click login button | Alert in correct username or password | Alert in correct username or password | Pass |
| 1.1.4 | Login button | Input "scylp2" in user name text field $\newline\rightarrow\newline$ Input "123456" in password text field $\newline\rightarrow\newline$ Click login button | Successfully enter the Login Page | Successfully enter the Login Page | Pass |

#### Home Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 2.1.1 | Navigation bar | Click Food Waste Statistics button | Successfully enter the Food Waste Statistics Page | Successfully enter the Food Waste Statistics Page | Pass |
| 2.1.2 | Navigation bar | Click Menu button& Successfully enter the Menu Page | Successfully enter the Menu Page | Pass |
| 2.1.3 | Navigation bar | Click Announcement button | Successfully enter the Announcement Page | Successfully enter the Announcement Page | Pass |
| 2.1.4 | Navigation bar | Click Personal Information button | Successfully enter the Personal Information Page | Successfully enter the Personal Information Page | Pass |
| 2.1.5 | Language change button | Click Language change button | Successfully change Chinese to English | Successfully change Chinese to English | Pass |

#### Food Waste Statistic Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 3.1.1 | Inquire button | Click Inquire button | Filter the results according to the needs | Filter the results according to the needs | Pass |
| 3.1.2 | Generate reports button | Click Generate report button | Successfully enter the Report Page | Successfully enter the Report Page | Pass |

#### Menu Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 4.1.1 | Reset button | Click Resetbutton | Successfully clear the choosen data | Successfully clear the chosen data | Pass |
| 4.1.2 | Screen button | Click Screen button | Successfull filter the data with selected criteria | Successfull filter the data with selected criteria | Pass |
| 4.1.3 | Create new data button | Click Create new data button | Successfully enter the New Data Page | Successfully enter the New Data Page | Pass |
| 4.1.4 | Delete button | Click Delete button | Successfully delete the date | Successfully delete the data | Pass |

#### Announcement Page
|TestID | Test Component | Test Steps | Expected Results | Actual Results | Pass/Fail |
|----|------|----------------|------------|------|------|
| 5.1.1 | Reset button | Click Resetbutton | Successfully clear the chosen data | Successfully clear the chosen data | Pass |
| 5.1.2 | Screen button | Click Screen button | Successfully filter the data with selected criteria | Successfully filter the data with selected criteria | Pass |
| 5.1.3 | Create new data button | Click Create new data button | Successfully enter the New Data Page | Successfully enter the New Data Page | Pass |
| 5.1.4 | Delete button | Click Delete button | Successfully delete the date | Successfully delete the date | Pass |

