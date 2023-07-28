---
title: "General Characteristics"
subtitle: "Chapter 3"
date: 2022-06-27
weight: 4
draft: false
---

The previous section evaluated the completeness and integrity of the
2020 public TNC Annual Reports, revealing extensive data quality
issues. This section explores the reports, in order to identify general
characteristics of TNC activity, where possible, and acknowledge
limitations and uncertainty otherwise. In some places, this section reveals
additional data quality issues. The 2020 public TNC Annual Reports, and
the figures presented in this section, cover the period of September 2019
through August 2020.

## How many TNC trips were taken?
Due to internal inconsistencies in the reports noted in the prior section, the number of
TNC trips taken vary from 218 million and 277 million trips, a range of 59 million trips
(27%). Table 18 shows the reported trip totals by company. Uber’s reported trips range
from 157 million to 166 million and Lyft’s range from 61 million to 111 million; the total
ranges from 218 to 277 million.

<figcaption>Table 18. TNC Trips from September 2019 to August 2020</figcaption> 

Report | Uber | Lyft | Total
 ----  | ----: | ----: | ----:
**Completed Trips** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 157,167,691 | 61,072,046 | 218,239,737
**Completed Trips** <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 166,464,298 | 110,786,422 | 277,250,720
**Difference** | 9,296,607 | 49,714,376 | 59,010,983
**Percent Difference** | 6% | 81% | 27%

## Where were TNC trips taken?
TNC trips were highly concentrated in urban areas.[^1] Figure 5 shows total trips and
trips per square mile by county for the 10 counties with the most TNC trips. Nearly
two-thirds (64%) of all TNC trips in California occurred in just 3 counties: Los Angeles,
San Francisco, and San Diego, which collectively contain only 5% of its land area.
While Los Angeles has the most trips of any county, San Francisco has by far the
greatest concentration of TNC trips, with nearly 500 times more TNCs per square
mile than the rest of the state.

[^1]: The total number of trips by zip code is based on the Aggregated Requests Accepted reports because Lyft’s Requests
Accepted report is incomplete and does not include zip codes. As noted previously, the total number of trips is not
consistent across reports.

{{% plotly_bar2axes id="Fig5" csvfile="content/ch3_general/trips_by_county.csv" height="100%" width="full" style="ta_grey_teal" orientation="h" %}}
<figcaption>Figure 5. Total Trips and Trip Density by County for the Top 10 Counties by TNC Trips</figcaption><br/>

Figure 6 shows trip density by zip code tabulation area (“zip code”). It illustrates the
extreme concentration of trips within a few small areas, most prominently San Francisco.
Within San Francisco, trips are further concentrated within the downtown core on the
city’s most congested streets where the city prioritizes sustainable, space-efficient
modes of travel, such as transit, bicycling and walking.

<div id="wrap">
    <iframe id="scaled-frame" src="https://sfcta.github.io/report-tncs2020-simwrapper/files/simwrapper-data/reports/tncs2020/viz-map-completed-trips.yaml?embed" height=800 width=100%></iframe>
</div>
<figcaption>Figure 6. TNC Trip Density by Zip Code from September 2019 to August 2020</figcaption><br/>

## When were TNC trips taken?
This section is limited to Uber because Lyft’s 2020 TNC Public Annual Reports are
missing required data and time information necessary for temporal analysis.

Figure 7 shows the average Uber trips by day of week for the 6 months prior to the
COVID pandemic and the first 6 months during the COVID pandemic. The figure shows that Uber trips
steadily increased from Monday to Friday, are at their highest on Friday and Saturday,
and their lowest on Sunday. It further shows that trips declined by 80% during the first 6
months of the COVID pandemic.

{{% plotly_bar id="Fig7" csvfile="content/ch3_general/trips_by_weekday_uber.csv" height="full" width="full" style="ta-flipped" %}}
<figcaption>Figure 7. Average Trips by Day of Week, Before and During COVID, from
September 2019 to August 2020</figcaption><br/>

Figure 8 shows Uber trips by time of day for a typical weekday and average Friday
before and during the COVID pandemic.[^2] Prior to the COVID pandemic, trips had a diurnal
distribution during typical weekdays: low trip volumes during late night, peaks of
activity in the morning and early evening when roadway congestion is most severe, and
sustained but lower volumes throughout the midday. Fridays had a similar morning
peak, but higher trips throughout the midday, a much larger evening peak, and a third
late-evening peak. During the COVID pandemic, Uber trips decreased substantially and time-
of-day profiles were flatter, and peaked earlier, in the mid-afternoon.

[^2]: A typical weekday is an average of non-holiday Tuesdays, Wednesdays, and Thursdays.

{{% plotly_line_1x2 id="Fig8" csvfile1="content/ch3_general/trips_by_hour_typical_weekday_uber.csv" csvfile2="content/ch3_general/trips_by_hour_friday_uber.csv" subtitle1="Typical Weekday" subtitle2="Fridays" height="full" width="full" style="ta-flipped" %}}
<figcaption>Figure 8. Trip by Time of Day on an Average Typical Weekday and Friday, Before and During COVID, from September 2019 to August 2020</figcaption><br/>

## How many miles did TNCs drive?
VMT is a measure of the total amount of travel. It is used in environmental analysis to
calculate emissions and is a key indicator of driving demand.

Table 19 shows the VMT reported by each company. Uber’s reported VMT ranges
from 662 million to 1.6 billion, a difference of 960 million. The CPUC redacted VMT
data from Requests Accepted and reported 1.1 billion VMT in Number of Miles.
Fleetwide VMT is unknown due to internal inconsistencies and data redacted from
Lyft’s reports. Fleetwide VMT could range between 1.7 billion and 2.7 billion, or even
exceed these figures.  

<figcaption>Table 19. Total VMT from September 2019 to August 2020</figcaption>

Company | Uber | Lyft | Total
 ---- | ----: | ----: | ----:
**VMT** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 1,624,860,871 | Missing | Unknown
**VMT** <br/><font size=-0.5>(from _Number of Miles_)</font> | 662,247,794 | 1,082,681,881 | 1,744,929,675
**Difference** | -962,613,077 | Unknown | Unknown
**Percent Difference** | -59% | Unknown | Unknown
**Minimum VMT** | 662,247,794 | 1,082,681,881 | 1,744,929,675
**Maximum VMT** | 1,624,860,871 | 1,082,681,881 | 2,707,542,752

## How many total hours of service does each TNC provide?
Total hours of service is a measure of the service provided, and when compared with
completed trips or VMT can give insights into service efficiency. The number of hours
worked are reported for each driver on each day worked by that driver in the _Number
of Hours_ report.
 
Table 20 shows the total and share of driver hours reported by each company. Uber
reports 46.9 million hours and Lyft reports 52.4 million hours. Uber reported 47% of the
total hours, which is much lower than their share of trips presented in Chapter 3 where,
depending on the report, Uber’s share of trips could be as low as 60% or as high as
72%. This could either mean that Lyft drivers log many more hours for each trip they
provided, effectively parked or driving empty more of the time than Uber, or Uber and
Lyft are not reporting trips or hours the same way.

<figcaption>Table 20. Total Driver Hours from September 2019 to August 2020</figcaption>

 Metric              | Uber       | Lyft       | Total
 ----                | ----:      | ----:      | ----:
Total Hours          | 46,885,564 | 52,351,454 | 99,237,018
Share of Total Hours | 47%        | 53%        | 100%


## How many TNC trips are "pooled"?
A “pooled” TNC trip is a trip when a passenger
indicates they are willing to share a ride with
another passenger in exchange for a reduced
cost. A pooled trip is “matched” when two or
more passenger requests are put into a single
driver itinerary that results in the passengers
sharing some portion of their trip. In theory, if
pooling led to sufficiently high vehicle occupancy
rates, it could reduce VMT enough to compensate
for the increased VMT due to TNC deadheading
and due to shifts to TNCs from lower VMT modes
such as transit, biking, and walking.

Figure 9 compares shares of pooled trips out
of all completed trips, based on the Requests
Accepted and Requests Not Accepted reports.
About 31 million (14%) of all completed TNC trips
were requests to be pooled. Only 16 million were
successfully matched with another passenger. In
other words, more than half of pool-requested
trips are functionally solo TNC trips.

{{% plotly_bar id="Fig9" csvfile="content/ch3_general/pool_totals-percentages-uber.csv" height="full" width="full" style="uber3" bmode="stack" orientation="h" %}}
{{% plotly_bar id="Fig9" csvfile="content/ch3_general/pool_totals-percentages-lyft.csv" height="full" width="full" style="lyft3" bmode="stack" orientation="h" %}}
{{% plotly_bar id="Fig9" csvfile="content/ch3_general/pool_totals-percentages-total.csv" height="full" width="full" style="grey_ta" bmode="stack" orientation="h" %}}
<figcaption>Figure 9. Pooling of Completed Trips from September 2019 to August 2020</figcaption><br/>

Pooling services were suspended starting in March 2020 due to the COVID
pandemic. Lyft’s reports withheld trip dates and times, so the effect of the pandemic
on Lyft’s overall pooling rates cannot be evaluated. Uber’s data indicates that 85%
of all their trips during the reporting period of September 2019 to August 2020
occurred before shelter-in-place orders went into effect on March 17, 2020. Figure 10
shows that 15% of Uber’s pre-COVID trips were requested to be pooled, and 10%
were successfully matched.

{{% plotly_bar id="Fig10" csvfile="content/ch3_general/pool_uber_precovid.csv" height="full" width="full" style="grey3_accent" bmode="stack" orientation="h" %}}
<figcaption>Figure 10. Pre-COVID Uber Pooling of Completed Trips</figcaption><br/>

Figure 11 shows the pooled requests received by each company. Uber receives more total
pooled requests, accepts more, and matches more of them than Lyft does. Uber received
20.7 million requests for pooled trips, of which 20.0 million (96%) were accepted, and
12.7 million (61%) were matched. Lyft received 12.4 million requests for pooled trips, of
which 11.3 million (91%) were accepted, and 3.4 million (27%) were matched.

{{% plotly_bar id="Fig11" csvfile="content/ch3_general/pool_requests.csv" height="full" width="full" style="ta_accent_grey_baygreen" bmode="stack" orientation="h" %}}
<figcaption>Figure 11. Requests for Pooled Trips from September 2019 to August 2020</figcaption><br/>

## Where are requests not completed?
Requests for TNC trips may not result in completed trips for a number of reasons. For
example, a request may not be successfully matched with an available driver, or may
be accepted by a driver and then cancelled, or a passenger may cancel their request
after some time has passed. The TNC company, the driver, and the prospective
passenger each play a role in whether a request results in a completed TNC trip. The
trip acceptance rate is the number of trip acceptances divided by the number of trip
requests, expressed as a percentage. Trip acceptance rates may reveal implicit or
explicit biases if, for example, drivers are less likely to accept trip requests from some
areas compared to others.

Extensive discrepancies in Lyft’s aggregated request data make it impossible to
perform meaningful analysis of trip acceptance rates. Figure 12 shows areas where
Uber and Lyft have reported completing 100% of trip requests. Uber has perfect trip
completion rates in only a handful of zip codes, within which it received fewer than
400 total trip requests. Lyft reports perfect trip acceptance rates in half of the zip codes
where it provided trips, including all of Sacramento County, and most of San Diego
and Santa Clara counties. This implies, for example, that of the 4.2 million trip requests
received in Sacramento County alone, not a single one was ever cancelled by a
passenger, or not accepted by a driver, or not matched with an available driver. Across
all of these zip codes Lyft received more than 26 million trip requests. It’s extremely
unlikely that Lyft’s reported trip completion rates in these zip codes are accurate.

<div id="wrap">
    <iframe id="scaled-frame" src="https://sfcta.github.io/report-tncs2020-simwrapper/files/simwrapper-data/reports/tncs2020/viz-map-trip-accept-uber.yaml?embed" height=800 width=49%></iframe>
    <iframe id="scaled-frame" src="https://sfcta.github.io/report-tncs2020-simwrapper/files/simwrapper-data/reports/tncs2020/viz-map-trip-accept-lyft.yaml?embed" height=800 width=49%></iframe>
</div>
<figcaption>Figure 12. Zip Codes with Perfect 100% Trip Acceptance Rates from
September 2019 to August 2020 for Uber (left) and Lyft (right). Click on the images to access the interactive version.</figcaption><br/>

<a href="../ch2_compliance" class="button">< 2. Reporting Compliance & Integrity</a>
<a href="../ch4_public_safety" class="button">4. Public Safety ></a>