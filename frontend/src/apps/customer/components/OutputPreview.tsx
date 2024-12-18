import React from "react";
import { theme } from "../../../shared/utils/theme";
import { Message } from "../types";
import { ProposalView } from "./proposal/ProposalView";
import { CompanyProfile } from "./company/CompanyProfile";
import { FileText, Clock } from "lucide-react";
import type { SalesProposal } from "../types/proposal";

interface OutputPreviewProps {
  message: Message;
}

export function OutputPreview({ message }: OutputPreviewProps) {
  const renderOutput = (response: any) => {

    return <CompanyProfile />;
    
    /*if (!response?.output?.type) return null;

    switch (response.output.type) {
      case "company_profile":
        

      case "proposal":
        if (!response.output.data) return null;
        return (
          <ProposalView proposal={response.output.data as SalesProposal} />
        );

      case "companies":
        if (!response.output.data) return null;
        return (
          <div className="grid gap-4">
            {response.output.data.map((company: any, index: number) => (
              <div
                key={index}
                className="border rounded-lg p-4"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3
                      className="font-medium"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {company.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {company.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "table":
        if (!response.output.data?.headers || !response.output.data?.rows)
          return null;
        return (
          <div className="overflow-x-auto">
            <table
              className="min-w-full divide-y"
              style={{ borderColor: theme.colors.border.light }}
            >
              <thead>
                <tr>
                  {response.output.data.headers.map(
                    (header: string, index: number) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody
                className="divide-y"
                style={{ borderColor: theme.colors.border.light }}
              >
                {response.output.data.rows.map(
                  (row: any[], rowIndex: number) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-6 py-4 whitespace-nowrap text-sm"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        );

      case "strategy":
      case "analysis":
        if (!response.output.data?.sections) return null;
        return (
          <div className="prose max-w-none">
            {response.output.data.sections.map(
              (section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.content.map(
                      (paragraph: string, pIndex: number) => (
                        <p
                          key={pIndex}
                          style={{ color: theme.colors.text.secondary }}
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        );

      default:
        return null;
    }*/
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* New Header */}
        <div
          className="sticky top-0 bg-white border-b px-6 py-4 mb-6 z-10"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <FileText
                  className="w-5 h-5"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <h2
                  className="text-lg font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {message.content.type === "agent-response" &&
                  message.content.data.output?.type === "company_profile"
                    ? "Company Profile"
                    : "Strategy Proposal"}
                </h2>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <Clock className="w-4 h-4" />
                  <span>
                    Last updated {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          {message.content.type === "agent-response" &&
            renderOutput(message.content.data)}
        </div>
      </div>
    </div>
  );
}
