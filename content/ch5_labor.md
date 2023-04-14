---
title: "Labor"
subtitle: "Chapter 5"
date: 2022-09-21
weight: 2
draft: false
---

This section examines hours worked, miles driven, and driver
suspensions from September 2019 to August 2020 as reporting the 2020
Public Annual Reports.

Each record in the _Number of Hours_ and _Number of Miles_ reports is a
driver day. Driver IDs are withheld from the public TNC Annual Reports,
even though Driver IDs can be anonymized to not contain personal
information. The absence of Driver IDs limits analysis of driver patterns
such as the number of drivers that exceed drive-time limits, how often
drive time limits are exceeded, or distributions of annual driver mileage.

## How many days did drivers work?
Figure 18 shows the number of driver days each company reported in the Number
of Hours and Number of Miles reports. As discussed in Chapter 2, these reports are
internally inconsistent. This figure reveals further inconsistencies. Both companies’ pre-
COViD, during-COViD, and total driver days are inconsistent, but the differences are much
greater during COViD. Uber’s driver days differ by 96,000 (1.4%) pre-COViD and differ by
768,000 (18%) during COViD. Lyft’s driver days differ by 80,000 (0.7%) pre-COViD and
differ by 2.4 million (101%) during COViD. Lyft reports more driver days than Uber, which
seems contradictory to the higher total number of Uber trips reported in Chapter 3.

{{% plotly_bar id="Fig18" csvfile="content/ch5_labor/driver_days.csv" height="full" width="full" style="uberlyft" orientation="h" %}}
<figcaption>Figure 18. Driver Days Before and During COVID from September 2019 to August 2020</figcaption><br/>

The lack of consistency within each company’s reports and a comparison of the companies
to each other suggests that reporting requirements are not adequately defined.

## How many hours a day does a driver drive?

The daily number of hours worked can give insights into labor conditions, serve as an
indicator of driver fatigue that can lead to unsafe driving, and identify when legal drive
time limits are violated.
Table 28 shows the average number of hours worked by drivers for each company
before and during COViD. The table shows that Uber drivers worked more hours per day
than Lyft drivers, both before and during COViD. Uber drivers increased their average
daily driving hours during COViD by 14%, from 4.6 to 5.3, while Lyft’s average daily driver
hours remained almost flat.

<figcaption>Table 28. Average Hours per Driver Day by Company, Before and During COViD,
from September 2019 to August 2020</figcaption>

Era | Uber | Lyft | Total
---- | ----: | ----: | ----:
Pre-Covid | 4.6 | 3.8 | 4.2
Covid | 5.3 | 3.9 | 4.7
**Total** | **4.9** | **3.8** | **4.3**

Figure 19 shows the distribution of driver days by the number of hours worked by each
company’s driver, before and during COViD. As with the table above, it shows that Lyft
reported more driver days and driver hours than Uber before COViD, and fewer driver
days and driver hours during COViD. Drivers for both companies most frequently drove
1 hour per day, both before and during COViD, with longer days steadily less frequent.
Uber’s driver hours during COViD dropped off steeply, unlike Uber’s pre-COViD hours
or Lyft’s hours before or during COViD. Lyft’s report included 123,000 driver days with
0 hours, while Uber’s included no driver days with 0 hours. It is not clear what a driver
day with 0 hours means. Both companies reported driver days with 10 or more hours,
which will be discussed in more detail in the next section.

{{% plotly_line id="Fig19" csvfile="content/ch5_labor/driver_days_by_hours_worked-distribution.csv" height="full" width="full" style="tnc_alt_dash" tf="tf1" xaxis_title="Hours" yaxis_title="Driver Days" %}}
<figcaption>Figure 19. Distribution of Driver Days by Number of Hours Worked from
September 2019 to August 2020</figcaption><br/>

## How often are legal drive-time limits exceeded?
California law limits drivers providing passenger transportation to “10 hours in any
24-hour period unless 8 consecutive hours off duty have elapsed.”1 Figure 20 shows
the share of driver days by number of hours driven for each company. The data may
indicate that drivers are exceeding legal drive time limits. Before COViD, 8% of Uber’s
driver days exceeded 10 hours and during COViD 6% exceeded 10 hours. Before and
during the COViD 4% of Lyft’s driver days exceeded 10 hours. While this report alone
cannot confirm that a violation has occurred due to the 8 hours off duty provision,
the reports do not account for additional factors like drivers who may be in violation
due to driving for both services, or whose shifts straddle 2 or more calendar days.
No public enforcement actions have been taken regarding possible violations of
California labor laws.

{{% plotly_bar id="Fig20" csvfile="content/ch5_labor/drive_time_limits.csv" height="full" width="full" style="grey3_accent" bmode="stack" orientation="h" %}}
<figcaption>Figure 20. Driver Days by Hours Worked from September 2019 to August 2020</figcaption><br/>

<a href="../ch4_public_safety" class="button">< 4. Public Safety</a>
<a href="../ch6_environment" class="button">6. Environment ></a>
