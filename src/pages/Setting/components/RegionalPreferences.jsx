
import DefaultSelect from "../../../components/Form/DefaultSelect.jsx";
import DefaultButton from "../../../components/Form/DefaultButton.jsx";

function RegionalPreferences() {
    const langugeOptions = [
        {id:"english",value:"English"},
        {id:"arabic",value:"Arabic"},
    ]
    const timeFormatOptions = [
        { id: "12hr", value: "12-hour format (AM/PM)" },
        { id: "24hr", value: "24-hour format" },
    ];
    const timezoneOptions = [
        { id: "utc", value: "UTC (Coordinated Universal Time)" },
        { id: "est", value: "EST (Eastern Standard Time)" },
        { id: "pst", value: "PST (Pacific Standard Time)" },
        { id: "cst", value: "CST (Central Standard Time)" },
        { id: "gmt", value: "GMT (Greenwich Mean Time)" },
    ];
    const dateFormatOptions = [
        { id: "mm-dd-yyyy", value: "MM/DD/YYYY" }, // مثال: 12/31/2024
        { id: "dd-mm-yyyy", value: "DD/MM/YYYY" }, // مثال: 31/12/2024
        { id: "yyyy-mm-dd", value: "YYYY-MM-DD" }, // مثال: 2024-12-31
        { id: "dd-month-yyyy", value: "DD Month YYYY" }, // مثال: 31 December 2024
        { id: "month-dd-yyyy", value: "Month DD, YYYY" }, // مثال: December 31, 2024
    ];
    return (
        <div className={"flex flex-col gap-8 lg:w-4/12 py-2"}>
            <div className={"flex flex-col text-start gap-1"}>
                <p className={"dark:text-gray-200"}>Regional Preferences</p>
                <p className={"text-sm dark:text-gray-200"}>Select your preferences for your region</p>
            </div>
            <div className={"flex flex-col gap-2"}>
                <DefaultSelect title={"Language"} options={langugeOptions}/>
                <DefaultSelect title={"Timezone"} options={timezoneOptions}/>
                <DefaultSelect title={"Time Format"} options={timeFormatOptions}/>
                <DefaultSelect title={"Date Format"} options={dateFormatOptions}/>
            </div>
            <div className={"flex gap-2"}>
                <DefaultButton type={'button'} title={"Cancel"}/>
                <DefaultButton type={'button'} title={"Apply Changes "} className={"bg-primary-500 text-white"}/>
            </div>
        </div>
    );
}

export default RegionalPreferences;