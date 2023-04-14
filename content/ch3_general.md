---
title: "General Characteristics"
subtitle: "Chapter 3"
date: 2022-06-27
weight: 4
draft: false
---

This section describes general characteristics of TNC activity revealed by the 2020 Annual Reports.  

## How many TNC trips were taken?

Due to internal inconsistencies in the reports noted in the prior section, the number of TNC trips taken vary from 218 million and 277 million trips, a range of 59 million trips.  Table 10 shows the reported trip totals by company.  It shows Uber’s reported trips ranging from 157 million to 166 million, Lyft’s ranging from 61 million to 111 million, and the total ranging from 218 to 277 million.

<figcaption>Table 16: TNC Trips by Company and in Total</figcaption> 

Report | Uber | Lyft | Total
 ----  | ----: | ----: | ----:
Completed Trips <br/><font size=-0.5>(from _Requests Accepted_)</font> | 157,167,691 | 61,072,046 | 218,239,737
Completed Trips <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 166,464,298 | 110,786,422 | 277,250,720
Difference | 9,296,607 | 49,714,376 | 59,010,983
Percent Difference | 6% | 81% | 27%

## Where were TNC trips taken?

TNC trips were highly concentrated in urban areas.  Figure 2 shows trips and trip densities by county for the 10 counties with the most TNC trips.  Nearly two-thirds (64%) of all TNC trips in California occurred in just 3 counties: Los Angeles, San Francisco, and San Diego, which collectively contain only 5% of its land area.  While Los Angeles has the most trips of any county, San Francisco has by far the greatest concentration of TNCs, with nearly 500 times more TNCs per square mile than the rest of the state.  

{{% plotly_bar2axes id="Fig2" csvfile="content/ch3_general/trips_by_county.csv" title="Trip and Trip Density" height="full" width="full" style="ta_grey_teal" %}}
<figcaption>Figure 2: Trips and Trip Density by County for the Top 10 Counties by TNC Trips</figcaption><br/>

Figure 3 shows trip density by zip code tabulation area (ZCTA).  It illustrates the extreme concentration of trips within a few small areas, most prominently San Francisco.  Within San Francisco, Los Angeles, and San Diego trips are further concentrated within the downtown core that makes up roughly a quarter of the land area of the city.    

<div id="wrap">
    <iframe id="scaled-frame" src="http://prospector/simwrapper/champ/TNCs%202020/viz-map-completed-trips.yaml?embed" height=800 width=1200></iframe>
</div> 
<figcaption>Figure 3: TNC Trips per Square Mile in California</figcaption><br/>

## When were TNC trips taken?
The failure to produce complete reports prevents Lyft’s temporal analysis of Lyft trips.  Uber trips take place on all days of the week and at all times of day, with a trend towards increased usage as the work week progresses.  Uber usage is greatest during traditional AM peak and PM peak hours, extending into the evening.  

Figure 4 shows the average Uber trips by day of week for the 6 months prior to and during the pandemic.  The figure shows that TNC trips steadily increase from Monday to Friday, are at their highest on Friday and Saturday, and their lowest on Sunday.  It further shows that trips declined by 80% during the pandemic.  Due to the failure to produce complete reports, Lyft’s trips by day of week are not known.  

{{% plotly_bar id="Fig4" csvfile="content/ch3_general/trips_by_weekday_uber.csv" title="Uber Trips by Day of Week" height="full" width="full" style="ta3" %}}
<figcaption>Figure 4: Average Uber Trips by Day of Week, Before and During the Pandemic</figcaption><br/>

Figure 5 shows Uber trips by time of day for a typical weekday and average Friday before and during the pandemic.[^10]  Prior to the Covid pandemic, trips had a diurnal distribution: low trip volumes during late night, peaks of activity in the morning and early evening when roadway congestion is most severe, and sustained but lower volumes throughout the midday.  Friday has a similar morning peak, but higher trips throughout the midday, a much larger evening peak, and a third late-evening peak.  During the pandemic, Uber trips decreased substantially and time-of-day profiles were flatter, and peaked earlier, in the mid-afternoon.  Due to the failure to produce datetime information, Lyft’s trips by time of day are not known.  

[^10]: A typical weekday is an average of non-holiday Tuesdays, Wednesdays, and Thursdays.

{{% plotly_line_1x2 id="Fig5" csvfile1="content/ch3_general/trips_by_hour_typical_weekday_uber.csv" csvfile2="content/ch3_general/trips_by_hour_friday_uber.csv" title="Uber Trips by Hour" subtitle1="Typical Weekday" subtitle2="Friday" height="full" width="full" style="ta" %}}
<figcaption>Figure 5: Uber Trips by Time of Day, Before and During the Pandemic</figcaption><br/>

## How many miles did TNCs drive?

Vehicle Miles Traveled (VMT) is a measure of the total amount of travel.  It is used in environmental analysis to calculate emissions, and is a key indicator of congestion.  Due to internal inconsistency and data withheld by CPUC staff from Lyft’s reports, fleetwide VMT is not known, but could range between 1.7 billion and 2.7 billion.  

Table 17 shows the VMT reported by each company.  It shows that Uber’s VMT ranges from 662 million to 1.6 billion, a difference of 960 million, with the Number of Miles report 59% less than Requests Accepted report.  Lyft withheld VMT data from Requests Accepted and reported 1.1 billion VMT in Number of Miles.  The resulting fleetwide range is 1.7 billion to 2.7 billion.  


<figcaption>Table 17: Range of VMT by Company and Report</figcaption>

Company | Uber | Lyft | Total
 ---- | ----: | ----: | ----:
Completed Trips <br/><font size=-0.5>(from _Requests Accepted_)</font> | 1,624,860,871 | Missing | Unknown
Completed Trips <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 662,247,794 | 1,082,681,881 | 1,744,929,675
Difference | -962,613,077 | Unknown | Unknown
Percent Difference | -59% | Unknown | Unknown
Minimum | 662,247,794 | 1,082,681,881 | 1,744,929,675
Maximum | 1,624,860,871 | 1,082,681,881 | 2,707,542,752

## How many total hours of service does each TNC provide?

Total hours of service is a measure of the service provided, and when compared with completed trips or VMT can give insights into service efficiency.  The number of hours worked are reported for each driver on each day worked by that driver in the Number of Hours report. 
 
Table 18 shows the total and share of driver hours reported by each company.  Uber reports 46.9 million hours and Lyft reports 52.4 million hours.  Uber reported 47% of the total hours, which is much lower than the share of trips provided by each company presented in Chapter 3, where depending on the report, Uber’s share of trip could be as low as 60% or as high as 72%.  This could either mean that Lyft driver log many more hours for each trip they provided, effectively parked or driving empty more of the time than Uber, or Uber and Lyft are not reporting hours consistently, or they are not reporting trips consistently.

<figcaption>Table 18: Total Driver Hours by Company</figcaption>

 Metric              | Uber       | Lyft       | Total
 ----                | ----:      | ----:      | ----:
Total Hours          | 46,885,564 | 52,351,454 | 99,237,018
Share of Total Hours | 47%        | 53%        | 100%


## How many TNC trips are "pooled"?

A "pooled" TNC trip is a trip where a passenger indicates they are willing to share a ride with another passenger in exchange for a reduced cost.  A pooled trip is "matched" when two or more passenger requests are put into a single driver itinerary that results in the passengers sharing some portion of their trip.  In theory, if pooling led to sufficiently high vehicle occupancy rates, it could reduce VMT enough to compensate for the increased VMT due to TNC deadheading and due to shifts to TNCs from lower VMT modes such as transit, biking, and walking.

Figure 6 shows compares all requests to pool requests, accepted pool requests, and matched pool requests, based on the Requests Accepted and Requests Not Accepted reports.  About 15% of all TNC trip requests, totaling 33 million, were requests to be pooled.  Of these requests, 31 million of these were accepted, but only 16 million (less than half) were matched with another passenger.  More than half of pool-requested trips end with solo TNC trips.  Uber receives more total pooled requests, accepts more, and matches more of them than Lyft does.  Uber received 20.7 million requests for pooled trips, of which 20.0 million were accepted, and 12.7 million were matched.  Lyft received 12.4 million requests for pooled trips, of which 11.3 million were accepted, and 3.4 million were matched.  

{{% plotly_bar id="Fig6" csvfile="content/ch3_general/pool_totals.csv" title="Requests and Pooled Requests" height="full" width="full" style="tnc" bmode="stack" %}}

<figcaption>Figure 6: Requests and Pooled Requests</figcaption><br/>

Requests for pooled trips comprise only a fraction (15%) of total requests received by each company and matched, completed trips are an even smaller fraction (7%).  Lyft receives more total requests for pooled trips but fulfills fewer.

## Where are requests not accepted?

Requests for TNC trips may not result in trips for a number of reasons, for example a request may be accepted by a driver and then cancelled, or a passenger may cancel their request after some time has passed.  The TNC company, the driver, and the prospective passenger each play a role in whether a request results in a trip.  The trip acceptance rate the number of trip acceptances divided by the number of trip requests, expressed as a percentage.  Trip acceptance rates my reveal implicit or explicit biases.

Figure 7 shows areas where Uber and Lyft have reported completing 100% of trip requests.  Uber has perfect trip completion rates in only a handful of ZCTAs, and in these it received fewer than 400 trip requests.  Lyft reports perfect trip acceptance rates in half of the ZCTAs where it provided trips, including all of Sacramento county, and most of San Diego and Santa Clara counties.  In these ZCTAs Lyft received more than 26 million trip requests.  Lyft’s trip completion rates are self-evidently false.  

<div id="wrap">
    <iframe id="scaled-frame" src="http://prospector/simwrapper/champ/TNCs%202020/viz-map-trip-accept-uber.yaml?embed" height=800 width=49%></iframe>
    <iframe id="scaled-frame" src="http://prospector/simwrapper/champ/TNCs%202020/viz-map-trip-accept-lyft.yaml?embed" height=800 width=49%></iframe>
</div> 
<figcaption>Figure 7: ZCTAs with Perfect 100% Trip Acceptance Rates for Uber (left) and Lyft (right)</figcaption><br/>

<a href="../ch2_compliance" class="button">< 2. Compliance and Integrity</a>
<a href="../ch4_public_safety" class="button">4. Public Safety ></a>