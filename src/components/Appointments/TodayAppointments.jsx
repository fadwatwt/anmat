"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useGetTodayAppointmentsQuery } from "@/redux/appointments/appointmentsApi";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { RiCalendarLine, RiArrowRightLine } from "react-icons/ri";

const TimeBadge = ({ time }) => {
  if (!time) return null;

  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const period = hour >= 12 ? "م" : "ص";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

  return (
    <span className="text-xs text-cell-secondary">
      {displayHour}:{minutes} {period}
    </span>
  );
};

function TodayAppointments({ maxItems = 5 }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: appointments = [], isLoading } = useGetTodayAppointmentsQuery();

  const displayAppointments = appointments.slice(0, maxItems);

  if (isLoading) {
    return (
      <div className="bg-surface rounded-lg border border-status-border p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-status-bg rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-status-bg rounded"></div>
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
          <RiCalendarLine size={20} className="text-primary-500" />
          <h3 className="font-semibold text-cell-primary">
            {t("Today's Appointments")} ({appointments.length})
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
          <RiCalendarLine size={40} className="mx-auto text-gray-300 mb-2" />
          <p className="text-cell-secondary">{t("No appointments today")}</p>
        </div>
      ) : (
        <div className="space-y-2">
          {displayAppointments.map((appointment) => (
            <div
              key={appointment._id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-status-bg transition-colors cursor-pointer"
              onClick={() => router.push(`/appointments/${appointment._id}`)}
              style={{ borderRight: `3px solid ${appointment.color || "#3B82F6"}` }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-cell-primary truncate text-sm">
                  {appointment.title}
                </p>
                {appointment.location && (
                  <p className="text-xs text-cell-secondary truncate">
                    📍 {appointment.location}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <TimeBadge time={appointment.start_time} />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: appointment.color || "#3B82F6" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodayAppointments;
