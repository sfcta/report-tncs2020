---
title: "Labor"
subtitle: "Chapter 5"
date: 2022-09-21
weight: 2
draft: false
---

This section examines hours worked, miles driven, and driver suspensions.  
Each record in the _Number of Hours_ and _Number of Miles_ reports is a driver day. Driver IDs are withheld from the public TNC Annual Reports, limiting analysis of driver patterns such as the number of drivers who exceed drive-time limits multiple times a year or distributions of annual driver mileage.    

## How many hours a day does a driver drive?

The daily number of hours worked can identify when state law is violated, and can also give insights into labor conditions and driver earning potential.  

Table 26 shows the average number of hours worked by drivers for each company before and during Covid.  The table shows that Uber driver worked more hours than Lyft drivers both before and during Covid.  Uber drivers increased their average daily driving hours during Covid by 14%, from 4.6 to 5.3, while Lyft’s average daily driver hours remained almost flat.  

<figcaption>Table 26: Average Hours per Driver Day by Company, Before and During Covid</figcaption>

Era | Uber | Lyft | Total
---- | ----: | ----: | ----:
Pre-Covid | 4.6 | 3.8 | 4.2
Covid | 5.3 | 3.9 | 4.7
Total | 4.9 | 3.8 | 4.3

Figure 17 shows the distribution of driver days by the number of hours worked by each company’s driver, before and during Covid.  As with the table above, it shows that Lyft reported more driver days and driver hours than Uber before Covid, and fewer driver days and driver hours during Covid.  Both company’s driver days peaked at 1 hour per day, both before and during Covid, with longer days steadily less frequent.  Uber’s driver hour during Covid drop off steeply, unlike Uber’s pre-Covid hours or Lyft’s hours before or during Covid.  Lyft’s report included 123,000 driver days with 0 hours, while Uber’s included no driver days with 0 hours, and both companies reported driver days with 10 or more hours, which will be discussed in more detail in the next section.  

{{% plotly_line id="Fig17" csvfile="content/ch5_labor/driver_days_by_hours_worked.csv" title="Distribution of Driver Days by Hours Worked" height="full" width="full" style="tnc_alt_dash" tf="tf1" %}}
<figcaption>Figure 17: Distribution of Driver Days by Hours Worked</figcaption><br/>

This suggests that either the Covid pandemic had different effects on Uber than on Lyft; that each company applied different reporting practices; or that each company’s reporting practices changed in different ways before and during the pandemic.  

Figure 18 shows the total driver hours reported each day from September 2019 through August 2020.  The time series shows inconsistencies that reveal another failure to develop or enforce consistent reporting requirements.  Uber's Number of Hours report is missing data for about the first 10 days of every month, and has about 1 day every month with 10 times the volume of an average day for that month.  Lyft's hours show a weekly cyclical pattern that seems logical.  However, prior to Covid the report more driver hours than Uber and during Covid the report less, which is a trend that does not make logical sense.  

{{% plotly_line id="Fig18" csvfile="content/ch5_labor/driver_hours_ts.csv" title="Driver Hours by Day" height="full" width="full" style="tnc" tf="tf1" %}}
<figcaption>Figure 18: Driver Hours by Day</figcaption><br/>

## How often are legal drive-time limits exceeded?

California law limits drivers providing passenger transportation to 10 hours within a 24-hour period.  Figure 19 shows the share of driver days by number of hours driven for each company.  It shows that each company has drivers exceeding legal drive time limits.  Before Covid, 8% of Uber’s driver days exceeded 10 hours, and during Covid, 6% of Uber’s driver days exceeded 10 hours.  Before and during the Covid, 4% of Lyft’s driver days exceeded 10 hours.  This suggests a profound regulatory failure by CPUC, with over 1.3 annual million violations of California labor laws going unnoticed and unchallenged.  

{{% plotly_bar id="Fig19" csvfile="content/ch5_labor/drive_time_limits.csv" title="Drive Days Exceeding Legal Limits" height="full" width="full" style="grey3_accent" bmode="stack" %}}

<figcaption>Figure 19: Driver Days Exceeding Legal Limits</figcaption><br/>

## How many miles a day does a driver drive?

Mileage is related to vehicle wear-and-tear and fuel consumption, both of which are costs to the driver, and when compared to completed trips and driver hours can give insights into efficiency.  Daily driver mileage is reported in the Number of Miles report.  

Table 27 shows the average VMT per driver day for each company, before and during Covid.  Uber drivers’ average daily VMT was lower than Lyft drivers’, both before and during Covid.  Uber driver’s average daily VMT declined only slightly, while Lyft driver’s average daily VMT increased by over 6%.  Both observations diverge from trends in driver hours, presented in Section 8.2, where Uber drivers drove more hours than Lyft drivers, and Uber driver’s average hours increased, and Lyft driver’s average hours remained flat.   

Table 27: Average VMT per Driver Day by Company, Before and During Covid

Metric  | Uber | Lyft | Total
 ---- | ----: | ----: | ----:
Pre-Covid | 68.8 | 78.4 | 75.0
Covid | 68.0 | 83.4 | 76.4
Total | 68.5 | 79.6 | 75.4

Figure 20 shows the distribution of driver days.  Uber reported driver days with up to 1,000 miles, and Lyft reported driver days with up to 1,725 miles.  The latter would require driving continuously for 24 hours at over 70 miles an hour.  This implausible outcome is yet another example of the CPUC’s failure to develop or enforce sensible reporting standards.  Uber’s driver days peaked between 20 and 30 miles per day, and were similarly high from 10 miles per day to 40 miles per day, both before and during Covid, gradually declining with longer days.  Lyft’s driver days had a more exaggerated peak between 0 and 10 miles per day, dropping off steeply between 10 and 20 miles per day, and declining more gradually with more than 20 miles per day.  

{{% plotly_line id="Fig20" csvfile="content/ch5_labor/driver_days_by_miles_driven.csv" title="Distribution of Driver Days by Miles Driven" height="full" width="full" style="tnc_alt_dash" tf="tf1" %}}

<figcaption>Figure 20: Distribution of Driver Days by Miles Driven</figcaption><br/>

This suggests that either the Covid pandemic had different effects on Uber than on Lyft, or that each company applied different reporting practices, or that each companies reporting practices changed in different ways before and during the pandemic.  