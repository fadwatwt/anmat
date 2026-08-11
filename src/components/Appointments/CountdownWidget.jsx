"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useGetCountdownAppointmentsQuery } from "@/redux/appointments/appointmentsApi";
import { RiTimerLine, RiArrowRightLine } from "react-icons/ri";

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-bold text-cell-primary">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs text-cell-secondary">{label}</span>
  </div>
);

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2">
      <CountdownUnit value={timeLeft.days} label="يوم" />
      <span className="text-cell-secondary">:</span>
      <CountdownUnit value={timeLeft.hours} label="ساعة" />
      <span className="text-cell-secondary">:</span>
      <CountdownUnit value={timeLeft.minutes} label="دقيقة" />
    </div>
  );
};

function calculateTimeLeft(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function CountdownWidget({ maxItems = 3 }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: appointments = [], isLoading } = useGetCountdownAppointmentsQuery();

  const displayAppointments = appointments.slice(0, maxItems);

  if (isLoading) {
    return (
      <div className="bg-surface rounded-lg border border-status-border p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-status-bg rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-16 bg-status-bg rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg border border-status-border p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <RiTimerLine size={20} className="text-primary-500" />
          <h3 className="font-semibold text-cell-primary">
            {t("Countdown")}
          </h3>
        </div>
        {appointments.length > maxItems && (
          <button
            onClick={() => router.push("/appointments")}
            className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1"
          >
            {t("View All")}
            <RiArrowRightLine size={14} />
          </button>
        )}
      </div>

      {displayAppointments.length === 0 ? (
        <div className="text-center py-6">
          <RiTimerLine size={40} className="mx-auto text-gray-300 mb-2" />
          <p className="text-cell-secondary">{t("No upcoming countdowns")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayAppointments.map((appointment) => (
            <div
              key={appointment._id}
              className="p-3 rounded-lg bg-status-bg cursor-pointer hover:bg-status-bg transition-colors"
              onClick={() => router.push(`/appointments/${appointment._id}`)}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-cell-primary truncate">
                  {appointment.title}
                </p>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: appointment.color || "#3B82F6" }}
                />
              </div>
              <CountdownTimer
                targetDate={`${appointment.date}T${appointment.start_time}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountdownWidget;
