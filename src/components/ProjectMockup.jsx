import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  UserCheck, 
  Clock, 
  Package, 
  Layers, 
  Boxes, 
  Truck, 
  Building2, 
  Zap, 
  HardHat, 
  Award,
  Sparkles,
  Workflow, 
  CreditCard, 
  Activity, 
  Radio, 
  PhoneCall, 
  Database, 
  Bot,
  Cpu,
  Gauge,
  Tag,
  Ticket,
  TrendingUp,
  Percent,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function ProjectMockup({ variant }) {
  // 1. Background Verification - BGV Platform Mockup
  if (variant === 'hedge-verify') {
    return (
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <ShieldCheck size={15} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--text)]">Background Verification</div>
              <div className="text-[9px] text-[var(--muted)]">Candidate Screening Platform</div>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded bg-[var(--surface)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-dot"></span>
            ACTIVE
          </span>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Verification Pipeline Checks */}
          <div className="space-y-1.5">
            <div className="text-[8px] font-bold uppercase tracking-wider text-[var(--muted)]">
              Verification Checkpoints
            </div>
            
            {[
              { label: "Identity & National ID", status: "Verified", icon: UserCheck, done: true },
              { label: "Employment History", status: "Verified", icon: FileCheck2, done: true },
              { label: "Criminal & Court Records", status: "In Progress", icon: Clock, done: false }
            ].map((check, idx) => {
              const Icon = check.icon;
              return (
                <div key={idx} className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/30 px-2.5 py-1.5">
                  <div className="flex items-center gap-2">
                    <Icon size={12} className={check.done ? "text-[var(--accent)]" : "text-amber-500"} />
                    <span className="text-[9px] font-semibold text-[var(--text)]">{check.label}</span>
                  </div>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                    check.done 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}>
                    {check.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2">
            <div className="flex items-center justify-between text-[9px] font-bold text-[var(--dark)] mb-1.5">
              <span>Overall Candidate Clearance</span>
              <span className="text-[8px] text-[var(--accent)]">88% Completed</span>
            </div>
            <div className="flex h-1.5 gap-1">
              <span className="flex-[8] rounded-full bg-[var(--accent)]" />
              <span className="flex-[2] rounded-full bg-[var(--surface-soft)]" />
            </div>
          </div>

          {/* Security & Audit footer */}
          <div className="flex items-center justify-between pt-1 text-[8px] font-medium text-[var(--muted)] border-t border-[var(--border)]">
            <span>Enterprise Multi-Tenant RBAC</span>
            <span className="text-[var(--accent)] font-semibold">Audit Ready</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Corrugation Packaging ERP Mockup
  if (variant === 'corrugation') {
    return (
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <Boxes size={15} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--text)]">Corrugation Packaging ERP</div>
              <div className="text-[9px] text-[var(--muted)]">Order & Manufacturing Control</div>
            </div>
          </div>
          <span className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
            ERP ACTIVE
          </span>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Status Metric Pills */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: 'Open POs', value: '36 Orders', icon: Package },
              { label: 'In Production', value: '18 Batches', icon: Layers },
              { label: 'Dispatched', value: '54 Units', icon: Truck },
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/30 p-1.5 text-center">
                  <Icon size={12} className="text-[var(--accent)] mx-auto mb-0.5" />
                  <span className="text-[8px] text-[var(--muted)] block">{m.label}</span>
                  <span className="text-[9px] font-bold text-[var(--text)] block">{m.value}</span>
                </div>
              );
            })}
          </div>

          {/* Active Carton Specification Card */}
          <div className="rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-soft)]/60 to-[var(--surface)] p-2.5">
            <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-wider text-[var(--muted)] mb-1">
              <span>Box Specification Builder</span>
              <span className="text-[var(--accent)]">5-Ply Heavy Duty</span>
            </div>
            <div className="text-[11px] font-bold text-[var(--dark)]">
              RSC Produce Shipping Carton
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[8px] text-[var(--muted)] border-t border-[var(--border)]/60 pt-1.5">
              <span>GSM: 180 / 140 Flute</span>
              <span className="font-semibold text-[var(--accent)]">Bursting Strength: 24 BF</span>
            </div>
          </div>

          {/* Live Line Status */}
          <div className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[8px]">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-dot" />
              <span className="font-semibold text-[var(--text)]">Corrugator Plant Line 1</span>
            </div>
            <span className="text-[var(--accent)] font-semibold">Running 120 m/min</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface-soft)]/30 px-3 py-1.5 text-[8px] text-[var(--muted)]">
          <span>Paper Reel Inventory Auto-Deduct</span>
          <span className="text-[var(--accent)] font-semibold">Live Telemetry</span>
        </div>
      </div>
    );
  }

  // 3. Anjali Infra - Infrastructure & Engineering Mockup
  if (variant === 'anjali-infra') {
    return (
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <Building2 size={15} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--text)]">Anjali Infra</div>
              <div className="text-[9px] text-[var(--muted)]">Infrastructure & Engineering</div>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded bg-[var(--surface)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
            <Award size={9} />
            MSME & GST
          </span>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Core Sectors */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: 'Substations', sub: '33/11kV Grid', icon: Zap },
              { label: 'Civil Works', sub: 'Industrial', icon: HardHat },
              { label: 'Transmission', sub: 'High Voltage', icon: Building2 },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/30 p-1.5 text-center">
                  <Icon size={12} className="text-[var(--accent)] mx-auto mb-0.5" />
                  <span className="text-[8px] font-bold text-[var(--text)] block">{item.label}</span>
                  <span className="text-[7px] text-[var(--muted)]">{item.sub}</span>
                </div>
              );
            })}
          </div>

          {/* Flagship Project Showcase */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2.5">
            <div className="flex items-center justify-between text-[8px] font-bold text-[var(--muted)] mb-1">
              <span className="text-[var(--accent)]">FLAGSHIP CONTRACT</span>
              <span>Odisha & AP</span>
            </div>
            <h4 className="text-[10px] font-bold text-[var(--text)]">
              33/11kV Substation & Power Evacuation Grid
            </h4>
            <p className="mt-1 text-[8px] text-[var(--muted)] leading-relaxed">
              Turnkey engineering, electrical transformer erection, and structural civil works delivered on schedule.
            </p>
          </div>

          {/* Milestone stats */}
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/40 p-1.5">
              <div className="text-[12px] font-extrabold text-[var(--dark)]">45+</div>
              <div className="text-[7.5px] text-[var(--muted)]">Delivered Projects</div>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/40 p-1.5">
              <div className="text-[12px] font-extrabold text-[var(--accent)]">100%</div>
              <div className="text-[7.5px] text-[var(--muted)]">Quality & Safety Track</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface-soft)]/30 px-3 py-1.5 text-[8px] text-[var(--muted)]">
          <span>Odisha & Andhra Pradesh Regional Projects</span>
          <span className="text-[var(--accent)] font-semibold">ISO Compliant</span>
        </div>
      </div>
    );
  }

  // 4. Plant Machine ERP & Telemetry Mockup
  if (variant === 'erp-machine') {
    return (
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <Gauge size={15} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--text)]">Plant Machine ERP</div>
              <div className="text-[9px] text-[var(--muted)]">Across 24 Factory Machines</div>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded bg-[var(--surface)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-dot"></span>
            87.3% OEE
          </span>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Machine Telemetry Grid */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: 'Utilization', value: '87.3%', icon: Gauge },
              { label: 'Running', value: '18 / 22', icon: Activity },
              { label: 'OEE Rating', value: '82.6%', icon: Cpu },
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/30 p-1.5 text-center">
                  <Icon size={12} className="text-[var(--accent)] mx-auto mb-0.5" />
                  <span className="text-[8px] text-[var(--muted)] block">{m.label}</span>
                  <span className="text-[9px] font-bold text-[var(--text)] block">{m.value}</span>
                </div>
              );
            })}
          </div>

          {/* Machine Status Breakdown */}
          <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[9px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-[var(--text)]">Running: 18</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="font-semibold text-[var(--text)]">Idle: 3</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="font-semibold text-[var(--text)]">Maint: 2</span>
            </div>
          </div>

          {/* Active Production Lines */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-wider text-[var(--muted)]">
              <span>Live Line Dispatch</span>
              <span className="text-[var(--accent)]">Telemetry Active</span>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/20 p-2 text-[8px] space-y-1">
              <div className="flex items-center justify-between font-bold text-[var(--text)]">
                <span>Rotary Die Cutter #01</span>
                <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded text-[7.5px]">240 cuts/min</span>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-[var(--muted)]">
                <span>SO-6344 Havells Pkg. Div</span>
                <span className="text-[var(--accent)] font-semibold">26,200 Qty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface-soft)]/30 px-3 py-1.5 text-[8px] text-[var(--muted)]">
          <span>Corrugation & Slotter Lines</span>
          <span className="text-[var(--accent)] font-semibold">IoT Telemetry Live</span>
        </div>
      </div>
    );
  }

  // 5. Referral & Coupon Code Platform Mockup
  if (variant === 'referral-coupon') {
    return (
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <Ticket size={15} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--text)]">Referral & Coupon Engine</div>
              <div className="text-[9px] text-[var(--muted)]">Growth & Discount Tracking</div>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded bg-[var(--surface)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-dot"></span>
            ACTIVE
          </span>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: 'Referrals', value: '1,420 Codes', icon: Share2 },
              { label: 'Coupons', value: '3,850 Vouchers', icon: Tag },
              { label: 'Conversion', value: '28.4% Rate', icon: TrendingUp },
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/30 p-1.5 text-center">
                  <Icon size={12} className="text-[var(--accent)] mx-auto mb-0.5" />
                  <span className="text-[8px] text-[var(--muted)] block">{m.label}</span>
                  <span className="text-[9px] font-bold text-[var(--text)] block">{m.value}</span>
                </div>
              );
            })}
          </div>

          {/* Referral vs Coupon Code Analytics */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2.5">
            <div className="flex items-center justify-between text-[8px] font-bold text-[var(--muted)] mb-1.5">
              <span>Referral vs Coupon Redemptions</span>
              <span className="text-[var(--accent)]">Yearly Overview</span>
            </div>
            
            {/* Visual ratio bar */}
            <div className="space-y-1">
              <div className="flex h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                <div className="bg-purple-600 transition-all" style={{ width: '64%' }} title="Referral Codes (64%)" />
                <div className="bg-orange-500 transition-all" style={{ width: '36%' }} title="Coupon Codes (36%)" />
              </div>
              <div className="flex items-center justify-between text-[7.5px] font-semibold">
                <span className="text-purple-700 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  Referral Codes (64%)
                </span>
                <span className="text-orange-700 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Coupons (36%)
                </span>
              </div>
            </div>
          </div>

          {/* Discount Tier Pills */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { code: "BASIC10", off: "10% Off" },
              { code: "PRO25", off: "25% Pro" },
              { code: "GIFT50", off: "₹500 Cash" },
            ].map((t, idx) => (
              <div key={idx} className="rounded border border-[var(--border)] bg-[var(--surface-soft)]/40 px-1.5 py-1 text-center font-mono">
                <span className="text-[8px] font-bold text-[var(--dark)] block">{t.code}</span>
                <span className="text-[7px] text-[var(--accent)] block font-sans font-semibold">{t.off}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface-soft)]/30 px-3 py-1.5 text-[8px] text-[var(--muted)]">
          <span>Instant Code Generation & Attribution</span>
          <span className="text-[var(--accent)] font-semibold">Anti-Fraud Protected</span>
        </div>
      </div>
    );
  }

  // Fallback / School Governance Tool
  return (
    <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-soft)]/50 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--surface-soft)] text-[var(--accent)]">
            <Workflow size={14} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[var(--text)]">School Governance</div>
            <div className="text-[9px] text-[var(--muted)]">Automation-first platform</div>
          </div>
        </div>
        <span className="rounded bg-[var(--surface-soft)] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[var(--dark)]">
          AUTOMATION
        </span>
      </div>
      <div className="p-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]/50 p-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] pulse-dot"></span>
              <span className="text-[10px] font-bold text-[var(--dark)]">Central Automation Engine</span>
            </div>
            <Sparkles size={12} className="text-[var(--accent)]" />
          </div>
          <div className="mt-1 text-[9px] text-[var(--muted)]">End-to-end workflow orchestration</div>
        </div>
      </div>
    </div>
  );
}
