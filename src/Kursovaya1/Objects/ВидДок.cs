﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Вид док.
    /// </summary>
    // *** Start programmer edit section *** (ВидДок CustomAttributes)

    // *** End programmer edit section *** (ВидДок CustomAttributes)
    [AutoAltered()]
    [Caption("Вид док")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВидДокE", new string[] {
            "Наименование as \'Наименование\'"})]
    [View("ВидДокL", new string[] {
            "Наименование as \'Наименование\'"})]
    public class ВидДок : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (ВидДок CustomMembers)

        // *** End programmer edit section *** (ВидДок CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ВидДок.Наименование CustomAttributes)

        // *** End programmer edit section *** (ВидДок.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ВидДок.Наименование Get start)

                // *** End programmer edit section *** (ВидДок.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ВидДок.Наименование Get end)

                // *** End programmer edit section *** (ВидДок.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидДок.Наименование Set start)

                // *** End programmer edit section *** (ВидДок.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ВидДок.Наименование Set end)

                // *** End programmer edit section *** (ВидДок.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВидДокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидДокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидДокE", typeof(IIS.Kursovaya1.ВидДок));
                }
            }
            
            /// <summary>
            /// "ВидДокL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидДокL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидДокL", typeof(IIS.Kursovaya1.ВидДок));
                }
            }
        }
    }
}
