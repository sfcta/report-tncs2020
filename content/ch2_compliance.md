---
title: "Reporting Compliance & Integrity"
subtitle: "Chapter 2"
date: 2022-06-27
weight: 3
draft: false
---

Data reporting compliance and integrity is a prerequisite for effective
analysis to guide the development of public policy and enforce
regulations. This section examines the 2020 public TNC Annual Reports
for compliance with reporting requirements and data integrity (meaning
that the data is logical and internally consistent).

## Are TNCs submitting the required reports?
Both companies filed the required 2020 TNC Annual Reports. In February 2022, the
Transportation Authority requested 2020 public TNC Annual Reports for Uber and Lyft
from the CPUC. The CPUC treated the request as a Public Records Act (PRA) request
and provided the reports later that month.

## Are the reports complete?
CPUC Staff prepared the 2020 public TNC Annual Reports, including its redactions.[^1]
A report is considered complete if all of the fields designated as public are present
and not redacted.[^2] Table 2 shows the percent completeness of each report by each
company, as measured by the percent of required public fields and records that are
present and unredacted. Uber’s 2020 public TNC Annual Reports are complete, with
the exception of one redacted field in the _Accidents & Incidents_ report. Lyft’s 2020
Annual Reports are not complete.  

[^1]: Confirmed by email from CPUC staff dated 3/29/2023.
[^2]: CPUC staff redacted data from the 2020 TNC Public Annual Reports by deleting entire columns of data. The following
year’s reports were redacted by replacing the contents with “REDACTED”.

<figcaption>Table 2. 2020 Public TNC Annual Report Completeness of Required Public Fields</figcaption>
{{< conditional_format_table_by_condition header=true bgcolors="#f2f3cc,#fdf5d9,#ffe8e2" colors="#006c69,#3d3d3e,#c41d4a" conds="eq 100%,eq Withheld,lt 100%" >}}
Report Name,Uber,Lyft
Driver Names & IDs,Withheld,Withheld
Accessibility Report (Confidential),100%,100%
Accessibility Report (Public),100%,100%
Accessibility Complaints (Confidential),100%,100%
Accessibility Complaints (Public),100%,100%
Accidents & Incidents,95%,87%
Assaults & Harassments,100%,79%
50000+ Miles,100%,57%
Number of Hours,100%,100%
Number of Miles,100%,100%
Driver Training,100%,100%
Law Enforcement Citations,100%,81%
Off-platform Solicitation,100%,80%
Aggregated Requests Accepted,100%,100%
Requests Accepted,100%,26%
Aggregated Requests Not Accepted,100%,100%
Requests Not Accepted,100%,38%
Suspended Drivers,100%,100%
Total Violations & Incidents,100%,100%
Zero Tolerance,100%,82%
{{< /conditional_format_table_by_condition >}}
<figcaption><font size=-1><b>Note:</b> The percentages denote the share of required public fields that are present and unredacted in the public annual reports.</font></figcaption><br/>

CPUC staff prepared the 2020 public TNC Annual Reports from the original reports
provided by the companies. It is not clear whether Lyft’s original reports, like the
public versions, are substantially incomplete. Among the redacted data are trip date,
time and location, VMT data, fares, and vehicle make, model and year. Both Uber and
Lyft’s reports, in some cases, include required data fields but the data itself is blank,
including trip occupancy.

Complete data is important to summarize and support evaluation of the industry’s activities:

- Date and time information can be used to evaluate whether trips
are taking place during the most congested times of day or whether
they are providing late night or weekend service when transit runs
less frequently.
- Location information can be used to evaluate whether TNCs are
driving in the busiest parts of cities or near regional transit hubs.
- VMT information, combined with time and location can be used to
analyze how TNCs may be contributing to congestion.
- VMT information when paired with vehicle make, model, and year can
be used to evaluate emissions.
- Trip occupancy can be used to evaluate the number of passengers
transported per vehicle (a measure of efficiency) and TNC’s
compliance with the CO2 per-passenger-mile requirements of the
Clean Miles Standard.
- The missing data from Lyft’s reports prevents these analyses for Lyft
and for the industry as a whole. See Appendix B: Report Completeness
Inventory for detailed accounting of each report’s completeness.

A closer look at the data can reveal other issues. For example, Figure 4 shows the daily
total number of completed trips from Uber’s _Requests Accepted_ report, revealing
that the first two weeks of March 2020 are missing. This two-week period does not
correspond with local COVID Shelter-in-Place (SIP) orders, which went into effect the
week following the missing data. It is unclear whether any other Uber reports are also
missing data from these two weeks. The redactions and omissions in Lyft’s incomplete
Requests Accepted report hides these kinds of gaps and irregularities, hampering
analysis and hindering regulatory oversight.

{{% plotly_line id="Fig4" csvfile="content/ch2_compliance/uber_ts.csv" height="full" width="full" style="ta" %}}
<figcaption>Figure 4. Uber Trips by Date from September 2019 to August 2020</figcaption><br/>

The 2021 public TNC Annual Reports, available on the CPUC website since October
2022, are even more heavily redacted. Table 3 compares the overall completeness
of Uber’s and Lyft’s 2020 and 2021 public TNC Annual Reports, as measured by the
percent of required public fields and records that are present and unredacted. Lyft’s
2020 and 2021 reports were both heavily redacted, but while Uber’s 2020 reports were
nearly complete, their 2021 reports were redacted similarly to Lyft’s. When the CPUC
releases the 2021 public TNC Annual Reports with only properly reacted data, the
Transportation Authority will produce a follow-up report documenting findings.

<figcaption>Table 1: Confidentiality Determination of the 2020 TNC Annual Reports</figcaption>

|      |    2020  | 2021 |
| ---- | -------: | ---: |
| Uber | > 99.99% |  28% |
| Lyft |      36% |  30% |

## Is the data reported internally consistent?
Internal consistency means that the data in one part of a company’s reports does
not contradict data in another part. Contradictory or internally inconsistent data
prevents monitoring and evaluation, informed policy-making, and effective regulatory
oversight. For a subset of metrics, the TNC Annual Reports contain multiple sources
of information from different reports, and each company’s reports should produce
consistent metrics across all the sources. This section evaluates the internal consistency
of the following metrics reported or derived from the 2020 public TNC Annual Reports.
These are the most basic descriptors of TNC activity.

- Trip requests
- Completed trips
- Incomplete trip requests
- Vehicle miles traveled (VMT)
- Driver days
- Driver hours

> The Traffic Congestion Mitigation Tax is
> a tax on all ride-hail trips originating in
> San Francisco, which began collections
> in 2020. San Francisco’s revenues from
> the tax have been highly irregular.
> Redactions of fare data in the TNC
> Annual Reports prevent independent
> validation of tax revenues, and the
> inconsistencies in the 2020 Annual
> Reports documented in this report
> raise questions about whether
> the 2020 TNC Annual Report data
> would be sufficient for independent
> validation even if fare data weren’t
> redacted. However, consistent,
> unredacted data from the TNC Annual
> Reports would support independent
> validation of tax revenues.

### TOTAL TRIP REQUESTS
The total number of trip requests is a measure of TNC demand. It can be calculated 3
ways using data found in 5 reports:

1. By adding the counts of the number of records in the _Requests Accepted_ and _Requests Not Accepted_ reports,
2. By adding the number of requests in the _Aggregated Requests Accepted_ and _Aggregated Requests Not Accepted_ report, and
3. By adding the total trip requests in the _Accessibility Report (Confidential)_.[^3]

[^3]: Despite the term "Confidential" in the name of this report, it is designated as public per the 2020 Confidentiality Ruling.

Table 4 and Table 5 show total trip requests by source. In the 2020 public TNC Annual
Reports, Uber’s reported trip requests are internally inconsistent, differing by nearly
20 million trips, or 12%. Lyft’s reported trip requests are also internally inconsistent,
differing by almost 50 million, or 75%. Lyft’s internal inconsistencies are up to 13 times
greater than Uber’s internal inconsistencies.

<figcaption>Table 4. Total Uber Trip Requests in the 2020 Public TNC Annual Reports</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |     ---:      |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size = -0.5>(from _Requests Accepted_, _Requests Not Accepted_)</font> | 160,849,005 | - | - |
| **Aggregate by zip code** <br/><font size = -0.5>(from _Aggregated Requests Accepted_, _Aggregated Requests Not Accepted_)</font> | 170,145,612 | 9,296,607 | 6% |
| **Aggregate by month** <br/><font size = -0.5>(from _Accessibility Report_)</font> | 180,483,335 | 19,634,330 | 12% |

<figcaption>Table 5. Total Lyft Trip Requests in the 2020 Public TNC Annual Reports</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |     ---:      |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size = -0.5>(from _Requests Accepted_)</font> | 66,292,592 | - | - |
| **Aggregate by zip code** <br/><font size = -0.5>(from _Aggregated Requests Accepted_)</font> | 116,006,968 | 49,714,376 | 75% |
| **Aggregate by month** <br/><font size = -0.5>(from _Accessibility Report_)</font> | 90,937,292 | 24,644,700 | 37% |
  
### COMPLETED TRIPS
Completed trips are a measure of total travel and
can be used to evaluate a company’s share of the
TNC market and the TNC share of the total travel
market. It is the most basic statistic describing
TNC services provided. Completed trips are
reported in the Requests Accepted report as a
list where each record represents a completed
trip, and in the Aggregated Requests Accepted
report which contains annual completed trip
totals for the reporting period by zip code.[^9]

[^9]: It is not clear whether the number of trips (“TotalAcceptedTrips”)
in Aggregated Requests Accepted refers to person-trips or requests.
Because the report name implies requests, we treat them as such. By
contrast, each record in Requests Accepted is clearly a request, and
the party size is designated by (“VehicleOccupancy”).

Table 6 and Table 7 show the number of
completed trips reported by Uber and Lyft in
each report. Uber’s reported completed trips are
internally inconsistent, differing by 9.3 million,
or 6%. Lyft’s reported completed trips are also
internally inconsistent, differing by 49.7 million, or 81%. Lyft’s internal inconsistencies
are 14 times greater than Uber’s internal inconsistencies.

<figcaption>Table 6. Uber Completed Trips in the 2020 Public TNC Annual Reports</figcaption>

| Source | Completed Trips | Difference | Percent Difference |
| :---   |     ---:        |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 157,167,691 | - | - |
| **Aggregated by zip code** <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 166,464,298 | 9,296,607 | 6% |

<figcaption>Table 7. Lyft Completed Trips in the 2020 Public TNC Annual Reports</figcaption>

| Source | Completed Trips | Difference | Percent Difference |
| :---   |     ---:        |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 61,072,046 | - | -
| **Aggregated by zip code** <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 110,786,422 | 49,714,376 | 81%
  
### INCOMPLETE TRIP REQUESTS
Incomplete trip requests are a measure of unserved demand and can be used
to calculate completion rates. Incomplete trip requests are reported in _Requests
Not Accepted_ as a list and in _Aggregated Requests Not Accepted_ as annual totals
aggregated by zip code.

Table 8 and Table 9 show the total requests that were not accepted reported by Uber
and Lyft in each report. Uber’s incomplete trip requests are internally consistent
(numbers match exactly) in each report. Lyft’s incomplete trip requests are internally
consistent in each report. 

<figcaption>Table 8. Uber Total Incomplete Trip Requests in the 2020 Public TNC Annual Reports</figcaption>

| Source | Incomplete Trip Requests | Difference | Percent Difference |
| :---   |     ---:      |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Not Accepted_)</font> | 3,681,314 | - | - |
| **Aggregate by zip code** <br/><font size=-0.5>(from _Aggregated Requests Not Accepted_)</font> | 3,681,314 | 0 | 0% |

<figcaption>Table 9. Lyft Total Incomplete Trip Requests in the 2020 Public TNC Annual Reports</figcaption>

| Source | Incomplete Trip Requests | Difference | Percent Difference |
| :---   |     ---:      |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Not Accepted_)</font> | 5,220,546 | - | - |
| **Aggregate by zip code** <br/><font size=-0.5>(from _Aggregated Requests Not Accepted_)</font> | 5,220,546 | 0 | 0% |

### VEHICLE MILES TRAVELED (VMT)
VMT is a measure of the total amount of travel. It is used in many system performance
metrics, including in environmental analysis to calculate emissions, and is a key
indicator of demand and congestion. It is reported by trip in Requests Accepted and
aggregated by driver-day in Number of Miles.[^10]

[^10]: TNC service is defined in three phases: phase 1 is when a driver has not accepted a ride, phase 2 is when a driver has
accepted a ride, and is en-route to pickup the passenger(s), and phase 3 is when the passenger is in the vehicle (i.e., the trip).

Table 10 and Table 11 show VMT reported by Uber and Lyft in each report. Uber’s
reported VMT is internally inconsistent, differing by nearly 1 billion VMT, or
59%. Lyft’s Requests Accepted report is incomplete and cannot be assessed for
consistency of reported VMT.

<figcaption>Table 10. Uber VMT in the 2020 Public TNC Annual Reports</figcaption>

| Source | VMT  | Difference | Percent Difference |
| :---   | ---: |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 1,624,860,871 | - | - |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Miles_)</font> | 662,247,794 | -962,613,077 | -59% |

<figcaption>Table 11. Lyft VMT in the 2020 Public TNC Annual Reports</figcaption>

| Source | VMT  | Difference | Percent Difference |
| :---   | ---: |    ---:    |       ---:         |
| **Disaggregate trip list** <br/><font size=-0.5>(from _Requests Accepted_)</font> | Missing | - | - |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Miles_)</font> | 1,082,681,881 | Unknown | Unknown |

### DRIVER DAYS
Driver days are used to measure labor conditions and can be used to evaluate
compliance with labor laws. Each record in the _Number of Miles_ and the _Number of Hours_ reports represents a driver day.

Table 12 and Table 13 show the total driver days reported by Uber and Lyft in each
report. Uber’s reported driver days are internally inconsistent, differing by 1.4 million, or
15%. Lyft’s reported driver days are also internally inconsistent, differing by 100,000, or
1%. Uber’s internal inconsistency is 22 times higher than Lyft’s.

<figcaption>Table 12. Uber Driver Days in the 2020 Public TNC Annual Reports</figcaption>

| Source | Driver Days | Difference | Percent Difference |
| :---   |    ---:     |    ---:    |       ---:         |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Miles_)</font> | 9,666,788 | - | - |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Hours_)</font> | 11,112,666 | 1,445,878 | 15% |

<figcaption>Table 13. Lyft Driver Days in the 2020 Public TNC Annual Reports</figcaption>

| Source | Driver Days | Difference | Percent Difference |
| :---   |    ---:     |    ---:    |       ---:         |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Miles_)</font> | 13,602,436 | - | - |
| **Aggregate by driver day** <br/><font size=-0.5>(from _Number of Hours_)</font> | 13,509,188 | -93,248 | -1% |

### DRIVER HOURS
Driver hours are also used to measure labor conditions and can support evaluation
of compliance with labor laws. _Number of Miles_ reports total driver hours by driver
day. Driver hours by trip for Period 2 (when a driver is en-route to pick up a passenger)
and Period 3 (when the passenger is in the vehicle) can be derived from the Requests
Accepted reports, but Period 1 (when a driver is waiting for a ride request) cannot
be derived. Therefore, the total of Period 2 and Period 3 hours in Requests Accepted
should be strictly less than the total hours in Number of Hours.

Table 14 and Table 15 show driver hours reported by Uber and Lyft in each report.
Uber’s _Requests Accepted_, which only includes hours for Periods 2 and 3, reports
59 million driver hours, **higher** than the 47 million driver hours reported in Number
of Miles which includes hours for Periods 1, 2 and 3. Lyft’s driver hours cannot be
evaluated for consistency due to redactions of date and time information from Lyft’s
_Requests Accepted_ report.

<figcaption>Table 14. Uber Driver Hours in the 2020 Public TNC Annual Reports</figcaption>

| Source | Driver Hours | Difference | Percent Difference |
| :---   |     ---:     |    ---:    |       ---:         |
| **Disaggregate trip list, P2+P3 only** <br/><font size=-0.5>(from _Requests Accepted_)</font> | 58,897,421 | - | - |
| **Aggregate by driver day, P1+P2+P3** <br/><font size=-0.5>(from _Number of Hours_)</font> | 46,885,564 | -12,011,857 | -20% |

<figcaption>Table 15. Lyft Driver Hours in the 2020 Public TNC Annual Reports</figcaption>

| Source | Driver Hours | Difference | Percent Difference |
| :---   |     ---:     |    ---:    |       ---:         |
| **Disaggregate trip list, P2+P3 only** <br/><font size=-0.5>(from _Requests Accepted_)</font> | Missing | - | - |
| **Aggregate by driver day, P1+P2+P3** <br/><font size=-0.5>(from _Number of Hours_)</font> | 52,351,454 | Unknown | Unknown |

### SUMMARY OF INTERNAL CONSISTENCY
Table 16 summarizes the internal consistency findings for the 6 metrics for which
consistency was evaluated for each company. The only metric Uber and Lyft reported
in an internally consistent manner was incomplete requests. Uber’s reports were
internally inconsistent for the remaining 5 metrics. Of the remaining metrics, Lyft’s
reports were internally inconsistent for 3 and could not be evaluated for 2 because
the required data is missing.

<figcaption>Table 16. Summary of Internal Consistency of the 2020 Public TNC Annual Reports</figcaption>

{{< conditional_format_table header=true bgcolors="#f2f3cc,#fdf5d9,#ffe8e2" colors="#006c69,#3d3d3e,#c41d4a"  cvals="Consistent,Inconsistent,Incomplete" >}}
Metric, Uber, Lyft
Total Requests,Inconsistent,Inconsistent
Completed Trips,Inconsistent,Inconsistent
Incomplete Requests,Consistent,Consistent
VMT,Inconsistent,Incomplete
Driver Days,Inconsistent,Inconsistent
Driver Hours,Inconsistent,Incomplete
{{< /conditional_format_table >}}

The 2020 public TNC Annual Reports for both Uber and Lyft are internally inconsistent
for many of the most basic metrics. In two of the cases evaluated, Lyft’s reports are
incomplete and their internal consistency cannot be evaluated.

The extent and scale of these inconsistencies prevent a sound understating of the
state of the industry, and hinders the development of informed policy-making and
effective regulatory oversight of TNCs. For example, whether Lyft completed 61
million trips, or 110 million trips, is critical to understanding the overall TNC market
size. The discrepancy of one billion VMT in Uber’s Annual Reports is highly relevant for
understanding California’s progress in meeting emission reduction goals.

Table 17 summarizes the consistency of the 2021 public TNC Annual Reports. Due
to more extensive redactions in the 2021 public Annual Reports, a less extensive
evaluation of consistency is possible. However, where consistency can be evaluated,
inconsistencies are reduced in some instances. For example, Uber’s number of
completed trips in the Requests Accepted and Aggregated Requests Accepted in
their 2021 Annual Reports are perfectly consistent, and Lyft’s number of completed
trips in these reports are nearly perfect, differing by 0.004%. But in many cases it is
not possible to assess consistency because of the increased level of redaction in the
2021 Public Annual Reports.

<figcaption>Table 17. Summary of Consistency of the 2021 Public TNC Annual Reports</figcaption>
{{< conditional_format_table header=true bgcolors="#f2f3cc,#fdf5d9,#ffe8e2" colors="#006c69,#3d3d3e,#c41d4a"  cvals="Consistent,Inconsistent,Incomplete" >}}
Metric, Uber, Lyft
Total Requests,Inconsistent,Inconsistent
Completed Trips,Consistent,Inconsistent
Incomplete Requests,Consistent,Consistent
VMT,Incomplete,Incomplete
Driver Days,Consistent,Inconsistent
Driver Hours,Incomplete,Incomplete
{{< /conditional_format_table >}}


<a href="../ch1_introduction" class="button">< 1. Introduction and purpose</a>
<a href="../ch3_general" class="button">3. General Characteristics ></a>