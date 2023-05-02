---
title: "Environment"
subtitle: "Chapter 6"
date: 2022-09-21
weight: 2
draft: false
---

This section examines emissions from September 2019 to August 2020
in the 2020 Public Annual Reports. It estimates carbon dioxide (CO2),
a greenhouse gas that contributes to global climate change, and
particulate matter of less than 2.5 microns (PM2.5) which contributes to
respiratory health issues.

The Clean Miles Standard and Incentives Program (Senate Bill No. 1014)
directed the CPUC to implement “annual targets and goals, beginning
in 2023, for the reduction [...] of emissions of greenhouse gases per
passenger-mile driven on behalf of a transportation network company”.
The CPUC has issued an Order Instituting Rulemaking to determine how
the Clean Miles Standard and Incentives Program will be implemented.
The CPUC’s rulemaking follows work led by the California Air Resources
Board (CARB), which developed a baseline inventory of TNC emissions
and proposed initial annual targets and goals.

## How much GHG did TNCs emit?

Greenhouse gases produced by TNCs will be regulated by the CPUC starting in 2023.
Greenhouse gases are a key contributor to global climate change. Only Uber’s 2020
public TNC Annual Reports contain the data necessary to evaluate emissions (VMT and
vehicle make, model, and year). Table 29 shows the estimated CO2 emissions produced
by Uber per period.

TNC service is classified into 3 periods: Period 1 when a driver is available and ready
to accept a trip, Period 2 when a driver has accepted a trip and is on the way to pick
up the passenger, and Period 3, when a driver is transporting a passenger from
origin to destination. CARB's 2018 Base Year Inventory found that TNCs emit 48%
more greenhouse gases on a per-passenger mile basis than trips taken in private
vehicles, due in large part to driving without a passenger in Periods 1 and 2. The
Transportation Authority estimated that Uber emitted 494,000 metric tons of CO2
from September 2019 to August 2020, about 30% of which was produced in periods
1 and 2, when the vehicle is not transporting a passenger. Uber’s total CO2 emissions
were similar to the CO2 emitted by the 2020 Caldwell Fire in northern California which
burned 81,000 acres.[^1][^2] Lyft emissions cannot be estimated because they did not report
mileage, vehicle make, model, or year.

[^1]: Emissions were estimated individually for each trip, using the vehicle make, model, and year, mileage by period, and emissions rates from fueleconomy.gov
[^2]: [California Air Resources Board, Wildfire Emission Estimates for 2020.](https://ww2.arb.ca.gov/sites/default/files/2021-07/Wildfire%20Emission%20Estimates%20for%202020%20_Final.pdf)

<figcaption>Table 29. Estimated CO2 Emitted by Uber by Period from September 2019 to August 2020</figcaption>

Metric | Period 1 <br/> Waiting for ride request | Period 2 <br/> On the way to pickup passenger | Period 3 <br/> Transporting passenger | Total
---- | ----: | -----: | -----: | -----:
Total CO2 | 85,408 | 61,523 | 346,790 | 493,722
Share of CO2 | 17% | 12% | 70% | 100%

## How much particulate matter (PM 2.5) did TNCs emit?  Where?

PM2.5 contributes to respiratory health issues. Only Uber reported the data necessary
to evaluate PM2.5 emissions. Table 30 shows estimated PM2.5 emissions produced by
Uber. Uber produced 2.65 metric tons of PM2.5, about 30% of which was produced
in Periods 1 and 2 when the vehicle is not transportation a passenger. Lyft’s PM2.5
emissions cannot be estimated because they did not report mileage, vehicle make,
model, or year.

<figcaption>Table 30. Estimated PM2.5 Emitted by Uber by Period from September 2019 to August 2020</figcaption>

Metric | Period 1 <br/> No passenger, waiting for ride request | Period 2 <br/> On the way to pickup passenger | Period 3 <br/> Transporting passenger | Total
---- | ----: | -----: | -----: | -----:
Total PM2.5 | 0.46 | 0.32 | 1.87 | 2.65
Share of PM2.5 | 17% | 12% | 71% | 100%

Figure 21 shows where Uber emitted PM2.5 by county for the 10 counties with the most
TNC trips. PM2.5 emissions were highly concentrated in San Francisco with over 5,000
grams of PM2.5 per square mile, approximated 340 times the concentration of PM2.5
emissions in the rest of the state. Uber’s estimated PM2.5 emissions in San Francisco are
approximately 5% of the total PM2.5 emissions produced by all passenger vehicles and
light duty trucks in San Francisco in 2019.[^4]

[^4]: [CARB EMFAC2021 v1.0.2, PM2.5_TOTEX for LDA, LDT1, and LDT2 in San Francisco in 2019.](https://arb.ca.gov/emfac/emissions-inventory/1563da8e39cf549e9626c01386cf5ebabe087ff9)

<figcaption>Figure 21. Estimated PM2.5 Emitted by Uber by County from September 2019 to August 2020</figcaption><br/>
{{% plotly_bar2axes id="Fig21" csvfile="content/ch6_environment/pm_by_county_uber.csv" height="100%" width="full" style="ta_grey_ruby" orientation="h" %}}

<a href="../ch5_labor" class="button">< 5. Labor</a>
<a href="../ch7_accessibility" class="button">7. Accessibility ></a>
